var W = document.body.clientWidth;
var H = document.body.clientHeight;

//tizai状态码
var moving = false;
var arrEdge;
var answering;
var e = 0;

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

point[0] = {
	top: 471,
	left: 166
}
point[1] = {
	top: 471,
	left: 601
}
point[2] = {
	top: 471,
	left: 875
}
point[3] = {
	top: 471,
	left: 1350
}
point[4] = {
	top: 471,
	left: 1620
}
point[5] = {
	top: 672,
	left: 1686
}
point[6] = {
	top: 672,
	left: 2100
}
point[7] = {
	top: 672,
	left: 2286
}
point[8] = {
	top: 802,
	left: 2286
}
point[9] = {
	top: 802,
	left: 2440
}
point[10] = {
	top: 802,
	left: 2538
}
point[11] = {
	top: 1099,
	left: 2538
}
point[12] = {
	top: 1100,
	left: 1915
}
point[13] = {
	top: 1100,
	left: 1310
}
point[14] = {
	top: 1100,
	left: 1048
}
point[15] = {
	top: 1527,
	left: 1048
}
point[16] = {
	top: 1527,
	left: 1350
}
point[17] = {
	top: 1527,
	left: 1800
}
point[18] = {
	top: 1527,
	left: 2540
}
point[19] = {
	top: 1527,
	left: 2758
}
point[20] = {
	top: 2000,
	left: 2758
}
point[21] = {
	top: 2000,
	left: 2375
}
point[22] = {
	top: 2000,
	left: 2000
}
point[23] = {
	top: 2000,
	left: 1570
}
point[24] = {
	top: 2000,
	left: 1182
}



$(document).ready(function() {
	horizontal(point[1].left);
	horizontal(point[2].left);
	horizontal(point[3].left);
	horizontal(point[4].left);
	setTimeout(function() {
		jump(point[5].top, point[5].left);
	}, 20000);
	setTimeout(function() {
		horizontal(point[6].left);
		horizontal(point[7].left);

		vertical1(point[8].top);
		horizontal(point[9].left);
		horizontal(point[10].left);

		vertical1(point[11].top);
		horizontal(point[12].left);
		horizontal(point[13].left);
		horizontal(point[14].left);

		vertical1(point[15].top);
		horizontal(point[16].left);
		horizontal(point[17].left);
		horizontal(point[18].left);
		horizontal(point[19].left);

		vertical1(point[20].top);
		horizontal(point[21].left);
		horizontal(point[22].left);
		horizontal(point[23].left);
		horizontal(point[24].left);
	}, 25000);
});


function horizontal(desL) { //梯仔水平运动动画函数
	var changeL = desL - tizai.left;
	_bg.animate({
		left: -changeL
	}, 5000);
}

function vertical1(desT) { //梯仔垂直运动动画函数
	var changeT = desT - tizai.top;
	_bg.animate({
		top: -changeT
	}, 5000);
}

/*function vertical2(desT) {
	var changeT = desT - tizai.top;
	_bg.animate({
		top: -changeT * 6 / 7
	}, 800);
	_bg.animate({
		top: -changeT
	}, 2500);
	setTimeout(function() {
		_tizai.animate({
			top: 266
		}, 2500);
		_tizai.animate({
			top: 471
		}, 2500);
	}, 70000);
}*/

function jump(desT, desL) { //梯仔跳跃动画函数
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
	}, 3000);
}

function change(mode) { //改变梯仔gif的函数
	switch (mode) {
		case 0:
			_tizai.html("");
			break;
		case 1:
			_tizai.html("");
			break;
		case 2:
			_tizai.html("");
			break;
		case 3:
			_tizai.html("");
			break;
	}
}