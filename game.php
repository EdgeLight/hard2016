<?php
// header("Content-Type:application/json;charset=utf-8");
session_start();
include("answer.php");
$db = new PDO("mysql:host=localhost;dbname=hard2016","wechat","wechat@)!#",array(PDO::ATTR_PERSISTENT => true));
$db -> query("SET NAMES 'UTF8'");
$db -> query("SET CHARACTER SET UTF8");
$db -> query("SET CHARACTER_SET_RESULTS=UTF8");
$db -> setattribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
$db -> setattribute(PDO::ATTR_EMULATE_PREPARES,false);

$wechat_id = $_SESSION['wechat_id'];

if($_SESSION['location'] == 'north')
{
	$location = 'n';
}
if($_SESSION['location'] == 'south')
{
	$location = 's';
}


// $wechat_id = "123456";//测试用
// $location = 'n';//测试用

$game = array(
	'step' => 'start',
	'question' => 0,
	'score' => 0
);

$answer = $_POST['answer'];

if($answer == 'start')
{
	$db -> beginTransaction();
	try{
		if($location == 'n')
		{
			$insert = $db -> exec("insert into step (id,wechat_id,location,q_num,chance,score,time) values ('','$wechat_id','n','0','2','0',NOW())");
		}
		if($location == 's')
		{
			$insert = $db -> exec("insert into step (id,wechat_id,location,q_num,chance,score,time) values ('','$wechat_id','s','0','2','0',NOW())");
		}
		$db -> commit();
	}
	catch(Exception $e)
	{
		$db -> rollBack();
	}

	if($location == 'n')
	{
		$q_num = rand(0,84);	//共85道
	}
	if($location == 's')
	{
		$q_num = rand(0,136);	//共137道
	}

	$db -> beginTransaction();
	try{
		$exec_update = $db -> exec("update step set q_num = '$q_num' where wechat_id = '$wechat_id'");
		$db -> commit();
	}catch(Exception $e)
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

	if(($score['score'] <= 15) && ($chance['chance'] > 0))	//不大于12个答题点且答题机会大于0
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
		}
		if($location == 's')
		{
			if($answer == $answer_s[$q_num])
			{
				$isright = 1;
			}else
			{
				$isright = 0;
			}
		}

		$overtime = $_POST['overtime'];
		if(($overtime == 0) || ($isright == 0))	//超时或答错，前端传来超时信息与用户所选答案
		{
			$db -> beginTransaction();
			try{
				$exec_update = $db -> exec("update step set chance = chance-1 where wechat_id = '$wechat_id'");
				$db -> commit();
			}catch(Exception $e)
			{
				$db -> rollBack();
			}

			if($location == 'n')
			{
				$q_num = rand(0,84);
			}
			if($location == 's')
			{
				$q_num = rand(0,136);
			}

			$db -> beginTransaction();
			try{
				$exec_update = $db -> exec("update step set q_num = '$q_num' where wechat_id = '$wechat_id'");
				$db -> commit();
			}catch(Exception $e)
			{
				$db -> rollBack();
			}

			$game['question'] = $q_num;	//题号传给前端

			$game['step'] = "stay";	//停留在原答题点再答另一题状态码
			$json = json_encode($game);
			echo $json;

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

			if($location == 'n')
			{
				$q_num = rand(0,84);
			}
			if($location == 's')
			{
				$q_num = rand(0,136);
			}

			$db -> beginTransaction();
			try{
				$exec_update = $db -> exec("update step set q_num = '$q_num' where wechat_id = '$wechat_id'");
				$db -> commit();
			}catch(Exception $e)
			{
				$db -> rollBack();
			}

			$game['question'] = $q_num;	//题号传给前端

			$game['step'] = "move";	//继续前进状态码
			$json = json_encode($game);
			echo $json;

		}
	}else
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
	}
}

?>
