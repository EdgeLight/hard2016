//---------------------前后端交互用变量---------------------------//
var score = 0;                        //位置/分数
var overtime = 1;                     //是否超时（0为超时）
var answer = 'start';                 //选择的答案,值为'start'时为开始
var q_num = 0;                        //题号
var status = 'start';                 //状态码
var timedown = 29;                    //倒计时显示时间(比总时间少1)
var isanswer = false;                 //点击确定按钮提交后锁定计时器
var td;                               //声明倒计时器
var area = 'north';                        //南北校
//--------------------------------------------------------------//
var area = window.location.href.split('status=')[1];           //获取南北校标志
//-------------------------------------------------------------//
//     变量            前端             后台              处理
//  题目内容          question                        JSON题号，前端从question取得
//  选项内容A        selection_a                      JSON题号，前端从selection_a取得
//  选项内容B        selection_b                      JSON题号，前端从selection_b取得
//  选项内容C        selection_c                      JSON题号，前端从selection_c取得
//  选项内容D        selection_d                      JSON题号，前端从selection_d取得

// 是否超时            overtime        overtime          POST
// 选择的答案          answer          answer            POST

// 位置/分数           score          game['score']       JSON
// 题号               question       game['question']    JSON
// 状态码             status         game['step']        JSON
//------------------------------------------------------------//


// 与后台交互
function ajax_start(){
	 //AJAX
	  $.ajax({
	    type:"post",
	    url:"game.php",
	    data: {
				 overtime:overtime, //overtime为0时表示超时
				 answer:answer //选择的选项，'start'表示开始答题(虽然不一定接start，还是放在这里)
	    },
	    dataType: 'json',
	    success:function(jsondata) {
				  status  = jsondata.step;    //start表示游戏开始，over表示游戏结束，move表示继续前进，stay表示停留在原答题点再答一次
			 		q_num   = jsondata.question;//题目号(下一次的题号！！)
			 		score   = jsondata.score;//最终成绩，也是当前题目数
			    ajax_over();   //ajax返回后的函数（纯前端）
				},
	    error:function(){
	    	alert('发生错误！');
	    }
	  })
}
//出题
function input_ques(){
	//南校题库
	if (area == 'south') {
		$("#question").html(question_s[q_num]);
		$("#selection_a").html(a_s[q_num]);
		$("#selection_b").html(b_s[q_num]);
		$("#selection_c").html(c_s[q_num]);
		$("#selection_d").html(d_s[q_num]);
	//北校题库
	}else {
		$("#question").html(question_n[q_num]);
		$("#selection_a").html(a_n[q_num]);
		$("#selection_b").html(b_n[q_num]);
		$("#selection_c").html(c_n[q_num]);
		$("#selection_d").html(d_n[q_num]);
	}

}
//注册确定按钮
$("#sub").on("click",function() {
  if (answer !='' && isanswer == false) {
    isanswer == true;
    $("#qabox").hide();
		clearInterval(td);                                       //清除计时器
		overtime = 1;
    setTimeout(function() {                                  //防止AJAX传得过快导致同一题发送了两次
      ajax_start();                                          //有选项被选择时，单击确定按钮提交答案(AJAX)
    },200)
  }
})
//判断对错
function check_answer(){
	if (status != 'start') {
		if (status == 'move') {         //继续前进，即答对
        $(".right").show();         //提醒答对
		}else if(status == 'stay'){     //停留，即答错或超时
			  $(".wrong").show();     		//提醒答错(或超时)
		}
	}
}
//----------------注册选项按下事件--------------------------//
//A被按下
$("#choose_a").on("click",function() {
  answer = 'A';
  $(".dot").removeClass("dot_on");
  $("#dot_a").addClass("dot_on");
})
//B被按下
$("#choose_b").on("click",function() {
  answer = 'B';
  $(".dot").removeClass("dot_on");
  $("#dot_b").addClass("dot_on");
})
//C被按下
$("#choose_c").on("click",function() {
  answer = 'C';
  $(".dot").removeClass("dot_on");
  $("#dot_c").addClass("dot_on");
})
//D被按下
$("#choose_d").on("click",function() {
  answer = 'D';
  $(".dot").removeClass("dot_on");
  $("#dot_d").addClass("dot_on");
})
//------------------选项按下事件--------------------------//
//倒计时开始
function timedown_start() {
	//倒计时器
	td = setInterval(function(){
	  $('#timedown').html(timedown + 's');
		timedown -= 1;
		if (timedown <= -1) {
			$('#timedown').html('时间到');                      //超时后保持计时器不变
			if (isanswer == false && answer == '') {           //并未提交或超时时（没有选择选项）
				overtime = 0;                                    //设置为超时
        isanswer = true;
				$("#qabox").hide();                              //隐藏答题框
				clearInterval(td);                               //清除计时器
				ajax_start();
			}else if (isanswer == false && answer != '') {
				overtime = 1;                                    //不设置为超时
				isanswer = true;
				$("#qabox").hide();                              //隐藏答题框
				clearInterval(td);                               //清除计时器
				ajax_start();                                    //提交为当前选中的答案
			}
		}
	},1000)
}
//答题开始(已经在答题点)
function answer_q(){
	$("#qabox").show();                                      //显示问答框架
	timedown_start();                                        //倒计时开始
}
//ajax返回后执行的函数
function ajax_over() {
	initialize_all();                                        //初始化
	if (status == 'over') {                                  //游戏结束
      achievement_show();                                  //显示成就页面
	}else {
		  input_ques();                                        //出题（包括第一题）
	}
	if (status != 'start' && status != 'over') {             //并非第一题,并且游戏继续的情况下
    check_answer();                                        //判断对错
  }
	if (status == 'start') {                                 //第一题情况下，延迟作答
		setTimeout(function() {
	    answer_q();
		},100)
	}
}
//初始化函数
function initialize_all() {
	$('#timedown').html('30s');                              //恢复计时器初始显示
	timedown = 29;
	overtime = false;                                        //恢复超时判断
	$(".dot").removeClass("dot_on");                         //清空单选按钮
	answer = '';                                             //恢复答案选项为空
	isanswer = false;                                        //解锁提交
}
//原地再答一次
$("#again_btn").on("click",function(){
  $(".wrong").hide();
  $("#qabox").show();
	answer_q();
})
//显示成就页面
function achievement_show() {
  if (score <= 4) {
		console.log('幼儿园');
     $(".title").html('残念 只答对' + score + '题');
		 $("#youeryuan").show();
  }else if (score >= 5 && score <= 8) {
		$(".title").html('哈哈 答对了' + score + '题');
		$("#xiaoxue").show();
  }else if (score >= 9 && score <= 10) {
		$(".title").html('真棒！答对' + score + '题');
		$("#zhongxue").show();
  }else if (score >= 11) {
		$("#daxue").show();
  }
}
//-----------------------------------------------------------------//
/***********最新************
*******change()函数挂了*****/

var W = document.body.clientWidth;
var H = document.body.clientHeight;

//tizai状态码
var moving = false;
var arrive = false;
var answering;
var e = 0;

/*moveTo函数下有四个子函数：
horizontal() 控制梯仔水平运动
vertical()   控制梯仔垂直运动
jump()       梯仔从南校跳到北校
change()     改变梯仔gif
每次到达答题点运行动画的回调函数answer()
点击类名为startBtn的按钮前往下一个答题点*/

var _tizai = $("#tizai");
var _bg = $("#bg");
var point = []; //每次运动目的地坐标（并不是答题点）

var tizai = {
	top: 471,
	left: 166,
	width: 41,
	height: 67
}
var bg = {
	top: 0,
	left: 0
}


// type = 0则该点为答题点
point[0] = {
	top: 471,
	left: 166,
	type: 0
}
point[1] = {
	top: 471,
	left: 601,
	type: 0
}
point[2] = {
	top: 471,
	left: 875,
	type: 0
}
point[3] = {
	top: 471,
	left: 1350,
	type: 0
}
point[4] = {
	top: 471,
	left: 1620,
	type: 1
}
point[5] = {
	top: 672,
	left: 1686,
	type: 0
}
point[6] = {
	top: 672,
	left: 2100,
	type: 0
}
point[7] = {
	top: 672,
	left: 2276,
	type: 1
}
point[8] = {
	top: 802,
	left: 2276,
	type: 1
}
point[9] = {
	top: 802,
	left: 2440,
	type: 0
}
point[10] = {
	top: 802,
	left: 2528,
	type: 1
}
point[11] = {
	top: 1099,
	left: 2528,
	type: 1
}
point[12] = {
	top: 1100,
	left: 1915,
	type: 0
}
point[13] = {
	top: 1100,
	left: 1310,
	type: 0
}
point[14] = {
	top: 1100,
	left: 1038,
	type: 1
}
point[15] = {
	top: 1527,
	left: 1038,
	type: 1
}
point[16] = {
	top: 1527,
	left: 1350,
	type: 0
}
point[17] = {
	top: 1527,
	left: 1950,
	type: 0
}
point[18] = {
	top: 1527,
	left: 2540,
	type: 0
}
point[19] = {
	top: 1527,
	left: 2748,
	type: 1
}
point[20] = {
	top: 2000,
	left: 2748,
	type: 1
}
point[21] = {
	top: 2000,
	left: 2375,
	type: 0
}
point[22] = {
	top: 2000,
	left: 2000,
	type: 0
}
point[23] = {
	top: 2000,
	left: 1570,
	type: 0
}
point[24] = {
	top: 2000,
	left: 1182,
	type: 0
}


$(document).ready(function() {
	$(".startBtn").click(function() {                                     //开始按钮点击后（传一次ajax）
		$(".rule").hide();                                                  //关闭开始提示
		ajax_start();                                                       //通过AJAX取得题号
	});
	$(".nextBtn").click(function() {                                      //继续按钮
		$(".result").hide();
		e++;
		moveTo(point[e].top, point[e].left, point[e].type);
	});
});

function moveTo(desT, desL, type) {
	if (e == 8 || e == 11 || e == 15 || e == 20) {
		vertical(desT,type);
	} else if (e == 5) {
		jump(desT, desL,type);
	} else {
		horizontal(desL,type);
	}
	change(e);
	setTimeout(function() {
		if (type == 1) {
			e++;
			moveTo(point[e].top, point[e].left, point[e].type);
		}
	}, 5050);
}

function horizontal(desL,type) { //梯仔水平运动动画函数
	var changeL = desL - tizai.left;
	_bg.animate({
		left: -changeL
	}, 5000,function(){
		if(type == 0){
			answer_q();
		}
	});
}

function vertical(desT,type) { //梯仔垂直运动动画函数
	var changeT = desT - tizai.top;
	_bg.animate({
		top: -changeT
	}, 5000,function(){
		if(type == 0){
			answer_q();
		}
	});
}

function jump(desT, desL,type) { //梯仔跳跃动画函数
	var changeT = desT - tizai.top;
	var changeL = desL - tizai.left;
	_bg.animate({
		top: -changeT,
		left: -changeL
	}, 2000);
	_tizai.animate({
		top: '-=' + (point[5].top - point[4].top),
		left: '-=' + (point[5].left - point[4].left)
	}, 2000);
	_tizai.animate({
		top: 471,
		left: 166
	}, 3000,function(){
		if(type == 0){
			answer_q();
		}
	});
}

function change(mode) { //改变梯仔gif的函数
	if (mode == 5) {
		setTimeout(function(){
		_tizai.html("<img src='./resource/three.gif'>");
		},2000);
		setTimeout(function() {
			_tizai.html("<img src='./resource/two.gif'>");
		}, 4800);
		setTimeout(function() {
			_tizai.html("<img src='./resource/one.gif'>");
		}, 5500);
	}
	if (mode == 8) {
		_tizai.html("<img src='./resource/four.gif'>");
		setTimeout(function() {
			_tizai.html("<img src='./resource/one.gif'>");
		}, 5000);
	}
	if (mode == 11) {
		_tizai.html("<img src='./resource/four.gif'>");
		setTimeout(function() {
			_tizai.html("<img src='./resource/five.gif'>");
		}, 5000);
	}
	if (mode == 15) {
		_tizai.html("<img src='./resource/four.gif'>");
		setTimeout(function() {
			_tizai.html("<img src='./resource/one.gif'>");
		},5000);
	}
	if (mode == 20) {
		_tizai.html("<img src='./resource/four.gif'>");
		setTimeout(function() {
			_tizai.html("<img src='./resource/five.gif'>");
		},5000);
	}
}
