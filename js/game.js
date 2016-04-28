
var WINDOW_WIDTH = document.body.clientWidth;
var WINDOW_HEIGHT = document.body.clientHeight;

//tizai状态码
var move;
var arrEdge;
var answering;
var e = 0;

var _tizai = $("#tizai");
var _bg = $("#bg");
var point = [];


var tizai = { top:_tizai.style.top , left:_tizai.style.left , width:_tizai.style.width , height:_tizai.style.height }
var bg = { top:_bg.style.top , left:_bg.style.left }

point[0] = { top , left , type }
point[1] = { top , left , type }
point[2] = { top , left , type }
point[3] = { top , left , type }
point[4] = { top , left , type }
point[5] = { top , left , type }
point[6] = { top , left , type }
point[7] = { top , left , type }
point[8] = { top , left , type }
point[9] = { top , left , type }
point[10] = { top , left , type }
point[11] = { top , left , type }


$(document).ready(function(){
	setInterval({
		if( move == true )
			move( point[e].top , point[e].left );
	}, 50);
});

function start(){    //开始动画
	tizai.animate({
		width , height ,
	}, "normal");
	bg.animate({
		width , height
	}, "normal");
}

function move( desT , desL ){
	if( desT > 0 && desT < WINDOW_HEIGHT && desL > 0 && desL < WINDOW_WIDTH &&
	 desL+tizai.width < WINDOW_WIDTH && desT+tizai.height < WINDOW_HEIGHT ){
		tizaiMove( desT , desL );
	}else{
		if( tizai.top == desT ){
			tizaiMove( desT , WINDOW_WIDTH-tizai.width );
		}
		if( tizai.left == desL ){
			tizaiMove( WINDOW_HEIGHT-tizai.height , desL );
		}
		bgMove( desT , desL );
	}
}

function tiziMove( desT , desL ){
	tizai.animate({
		top: desT, left: desL
	}, "normal");
}

function bgMove( desT , desL ){
	var changeT = bg.top - desT;
	var changeL = bg.left - desL;
	bg.animate({
		top: desT, left: desL
	}, "normal");

	for(var i = 0; i < point.length; i++){
		point[i].top = point[i].top - changeT;
		point[i].left = point[i].left - changeL;
	}
}

function judgePlace( type ){
	move = false;
	if( type == 1 ){
		//出题答题
		e++;   //答题完毕
	}else{
		move = true;
		e++;
	}
}