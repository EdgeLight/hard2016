<?php
header("Content-Type:application/json;charset=utf-8");
session_start();
include "answer.php";
$db = new PDO("mysql:host=localhost;dbname=hard2016", "wechat", "wechat@)!#");
$db -> query("SET NAMES 'UTF8'");
$db -> query("SET CHARACTER SET UTF8");
$db -> query("SET CHARACTER_SET_RESULTS=UTF8");
$db -> setattribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
$db -> setattribute(PDO::ATTR_EMULATE_PREPARES,false);

$wechat_id = $_SESSION['wechat_id'];

if ($_SESSION['location'] == 'north') {
    $location = 'n';
} elseif ($_SESSION['location'] == 'south') {
    $location = 's';
} else {
    $array['msg'] = 'request error';
    $array['state'] = false;
    $json = json_encode($array);
    echo $json;
    exit();
}

// $wechat_id = "123456";//测试用
// $location = 'n';//测试用

$game = array(
	'step' => 'start',
	'question' => null,
	'score' => 0
);

$answer = $_POST['answer'];

if($answer == 'start')
{
	if($location == 'n')
	{
		$q_num = mt_rand(0,85);		//共86道
	}else
	{
		$q_num = mt_rand(0,136);	//共137道
	}

	$rs = $db -> prepare("select id from step where wechat_id = ?");
	$rs -> setFetchMode(PDO::FETCH_ASSOC);
	$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
	$rs -> bindParam(1,$wechat_id);
	$rs -> execute();
	$result = $rs -> fetch();

	$rs = $db -> prepare("select id from question_num where wechat_id = ?");
	$rs -> setFetchMode(PDO::FETCH_ASSOC);
	$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
	$rs -> bindParam(1,$wechat_id);
	$rs -> execute();
	$result_q = $rs -> fetch();

	if(!empty($result) || !empty($result_q))	//状况：用户强行退出，导致数据未被delete
	{
		//重新初始化数据
		$db -> beginTransaction();
		try{
			$exec_update = $db -> exec("update step set location = '$location', q_num = '$q_num', chance = '2', score = '0', time = NOW() where wechat_id = '$wechat_id'");
			$db -> commit();
		}catch(Exception $e)
		{
			$db -> rollBack();
		}

		$rs = $db -> prepare("delete from question_num where wechat_id = ?");
		$rs -> setFetchMode(PDO::FETCH_ASSOC);
		$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
		$rs -> bindParam(1,$wechat_id);
		$rs -> execute();

	}else
	{
		$db -> beginTransaction();
		try{
			if($location == 'n')
			{
				$insert = $db -> exec("insert into step (id,wechat_id,location,q_num,time) values ('','$wechat_id','n','$q_num',NOW())");
			}else
			{
				$insert = $db -> exec("insert into step (id,wechat_id,location,q_num,time) values ('','$wechat_id','s','$q_num',NOW())");
			}
			$db -> commit();
		}
		catch(Exception $e)
		{
			$db -> rollBack();
		}
	}

	$db -> beginTransaction();
	try{
		$insert = $db -> exec("insert into question_num (id,wechat_id,q_sql) values ('','$wechat_id','$q_num')");

		$db -> commit();
	}
	catch(Exception $e)
	{
		$db -> rollBack();
	}

 	$game['question'] = $q_num;	//题号传给前端
 	$json = json_encode($game);
 	echo $json;

}else
{
	$rs = $db -> prepare("select score from step where wechat_id = ? order by time desc limit 1");
	$rs -> setFetchMode(PDO::FETCH_ASSOC);
	$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
	$rs -> bindParam(1,$wechat_id);
	$rs -> execute();
	$score = $rs -> fetch();

	$rs = $db -> prepare("select chance from step where wechat_id = ? order by time desc limit 1");
	$rs -> setFetchMode(PDO::FETCH_ASSOC);
	$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
	$rs -> bindParam(1,$wechat_id);
	$rs -> execute();
	$chance = $rs->fetch();

	if(($score['score'] <= 15) && ($chance['chance'] >= 0))	//不大于12个答题点且答题机会大于0
	{
		$rs = $db -> prepare("select q_num from step where wechat_id = ? order by time desc limit 1");
		$rs -> setFetchMode(PDO::FETCH_ASSOC);
		$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
		$rs -> bindParam(1,$wechat_id);
		$rs -> execute();
		$q_num = $rs->fetch();
		$q_num = $q_num['q_num'];

		if($location == 'n')
		{
			if($answer == $answer_n[$q_num])
			{
				$isright = 1;
			}else
			{
				$isright = 0;
			}
		}else
		{
			if($answer == $answer_s[$q_num])
			{
				$isright = 1;
			}else
			{
				$isright = 0;
			}
		}

		//避免重复抽题操作
		$rs = $db -> prepare("select q_sql from question_num where wechat_id = ?");
		$rs -> setFetchMode(PDO::FETCH_ASSOC);
		$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
		$rs -> bindParam(1,$wechat_id);
		$rs -> execute();
		$q_num = $rs->fetchAll();
		$row = $rs -> rowCount();

		for($i=0;$i<$row;$i++)
		{
			$q_num[$i] = $q_num[$i]['q_sql'];
		}

		if($location == 'n')
		{
			$numbers = range(0,84);
		}else
		{
			$numbers = range(0,136);
		}

		$num = array_diff($numbers,$q_num);
		shuffle($num);
		$q_num = array_slice($num,0,1);
		$q_num = $q_num[0];


		$overtime = $_POST['overtime'];

		if(($overtime == 0) || ($isright == 0))	//超时或答错，前端传来超时信息与用户所选答案
		{
			if($chance['chance'] == 0)	//机会为零而结束
			{

				$game['step'] = "over";	//游戏结束状态码

				$game['score'] = $score['score'];	//最终成绩传给前端

				$json = json_encode($game);
				echo $json;

				$rs = $db -> prepare("delete from step where wechat_id = ?");
				$rs -> setFetchMode(PDO::FETCH_ASSOC);
				$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
				$rs -> bindParam(1,$wechat_id);
				$rs -> execute();

				$rs = $db -> prepare("delete from question_num where wechat_id = ?");
				$rs -> setFetchMode(PDO::FETCH_ASSOC);
				$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
				$rs -> bindParam(1,$wechat_id);
				$rs -> execute();

			}else
			{
				$db -> beginTransaction();
				try{
					$exec_update = $db -> exec("update step set chance = chance-1 where wechat_id = '$wechat_id'");
					$db -> commit();
				}catch(Exception $e)
				{
					$db -> rollBack();
				}

				$db -> beginTransaction();
				try{
					$exec_update = $db -> exec("update step set q_num = '$q_num' where wechat_id = '$wechat_id'");
					$db -> commit();
				}catch(Exception $e)
				{
					$db -> rollBack();
				}


				$db -> beginTransaction();
				try{
					$insert = $db -> exec("insert into question_num (id,wechat_id,q_sql) values ('','$wechat_id','$q_num')");

					$db -> commit();
				}
				catch(Exception $e)
				{
					$db -> rollBack();
				}

				$game['question'] = $q_num;	//题号传给前端

				$game['score'] = $score['score'];

				$game['step'] = "stay";	//停留在原答题点再答另一题状态码
				$json = json_encode($game);
				echo $json;
			}
		}else
		{
			if($score['score'] == 15)	//到达终点而结束
			{
				$game['step'] = "over";	//游戏结束状态码

				$game['score'] = $score['score'];	//最终成绩传给前端

				$json = json_encode($game);
				echo $json;

				$rs = $db -> prepare("delete from step where wechat_id = ?");
				$rs -> setFetchMode(PDO::FETCH_ASSOC);
				$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
				$rs -> bindParam(1,$wechat_id);
				$rs -> execute();

				$rs = $db -> prepare("delete from question_num where wechat_id = ?");
				$rs -> setFetchMode(PDO::FETCH_ASSOC);
				$db -> setAttribute(PDO::ATTR_CASE,PDO::CASE_NATURAL);
				$rs -> bindParam(1,$wechat_id);
				$rs -> execute();
			}else
			{
				$db -> beginTransaction();
				try{
					$exec_update = $db -> exec("update step set score = score+1 where wechat_id = '$wechat_id'");
					$db -> commit();
				}catch(Exception $e)
				{
					$db -> rollBack();
				}

				$db -> beginTransaction();
				try{
					$exec_update = $db -> exec("update step set q_num = '$q_num' where wechat_id = '$wechat_id'");
					$db -> commit();
				}catch(Exception $e)
				{
					$db -> rollBack();
				}

				$db -> beginTransaction();
				try{
					$insert = $db -> exec("insert into question_num (id,wechat_id,q_sql) values ('','$wechat_id','$q_num')");

					$db -> commit();
				}
				catch(Exception $e)
				{
					$db -> rollBack();
				}

				$game['question'] = $q_num;	//题号传给前端

				$game['score'] = $score['score'];

				$game['step'] = "move";	//继续前进状态码
				$json = json_encode($game);
				echo $json;

			}
		}
	}
}

?>
