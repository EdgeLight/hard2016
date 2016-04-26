
var WINDOW_WIDTH = document.body.clientWidth;
var WINDOW_HEIGHT = document.body.clientHeight;

var move;
var arrEdge;
var answering;
var e = 0;

var _tizai = $("#tizai");
var _bg = $("#bg");
var point = [];


var tizai = { top:_tizai.style.top , left:_tizai.style.left }
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
	}, 50)
});

function start(){    //开始动画

}

function move( desT , desL ){
	if( desT > 0 && desT < WINDOW_HEIGHT && desL > 0 && desL < WINDOW_WIDTH){
		tizaiMove( desT , desL );
	}else{
		tizaiMove( /*参数待定*/ );
		bgMove( desT , desL );
	}
}

function tiziMove( desT , desL ){

}

function bgMove( desT , desL ){

}

function judgePlace( type ){
	if( type == 1 ){
		//出题答题
		e++;   //答题完毕
	}
}