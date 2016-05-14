/*佛祖保佑，没有bug*/

/*moveTo函数下有四个子函数：
horizontal() 控制梯仔水平运动
vertical()   控制梯仔垂直运动
jump()       梯仔从南校跳到北校
change()     改变梯仔gif
每次到达答题点运行动画的回调函数answer()
点击类名为startBtn的按钮前往下一个答题点*/

var e = 1;

var tizai = {
	top:471,
	left:166
}

var _tizai = $("#tizai");
var _bg = $("#bg");
var point = []; //每次运动目的地坐标（并不是答题点）
/*
type = 0则该点为答题点
*/
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
	$(".startBtn").click(function() {
		moveTo(point[e].top, point[e].left, point[e].type);
		$(".rule").hide();
		setTimeout(function() {
			$(".right").show();
		}, 5000);
	});
	$(".nextBtn").click(function() {
		e++;
		moveTo(point[e].top, point[e].left, point[e].type);
		$(".right").hide();
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
			answer();
		}
	});
}

function vertical(desT,type) { //梯仔垂直运动动画函数
	var changeT = desT - tizai.top;
	_bg.animate({
		top: -changeT
	}, 5000,function(){
		if(type == 0){
			answer();
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
			answer();
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

function answer(){
	$(".right").show();
	/*@海鑫
	把你的函数放在这个地方*/
}