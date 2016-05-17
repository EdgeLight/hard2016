<?php
header("Content-Type: text/html; charset=UTF-8");
session_start();
if (strpos(addslashes($_SERVER['HTTP_USER_AGENT']), 'MicroMessenger') != false) {
    $_SESSION['wechat_id'] = $_GET['wechatId'];
    $_SESSION['location'] = $_GET['location'];
} else {
    // $this->error('请从微信端登录');
}
require "jssdk.php";
$jssdk = new JSSDK("wx72dcc0c8ae1265f9", "ec008dac2e11c2b893366ca77bb7b4d0");
// $jssdk = new JSSDK("wxd25012bb1da2b4cf", "d4624c36b6795d1d99dcf0547af5443d");
$signPackage = $jssdk->GetSignPackage();

?>
<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<title>毕业之旅</title>
</head>
<body>
	<!-- 地图 -->
	<div id="bg">
		<img src="resource/01.png" alt="" class="bg">
		<img src="resource/02.png" alt="" class="bg">
		<img src="resource/03.png" alt="" class="bg">
		<img src="resource/04.png" alt="" class="bg">
		<img src="resource/05.png" alt="" class="bg">
		<img src="resource/06.png" alt="" class="bg">
		<img src="resource/07.png" alt="" class="bg">
		<img src="resource/08.png" alt="" class="bg">
		<img src="resource/09.png" alt="" class="bg">
		<img src="resource/10.png" alt="" class="bg">
		<img src="resource/11.png" alt="" class="bg">
		<img src="resource/12.png" alt="" class="bg">
		<img src="resource/13.png" alt="" class="bg">
		<img src="resource/14.png" alt="" class="bg">
		<img src="resource/15.png" alt="" class="bg">
		<img src="resource/16.png" alt="" class="bg">
		<img src="resource/17.png" alt="" class="bg">
		<img src="resource/18.png" alt="" class="bg">
		<img src="resource/19.png" alt="" class="bg">
		<img src="resource/20.png" alt="" class="bg">
		<img src="resource/21.png" alt="" class="bg">
		<img src="resource/22.png" alt="" class="bg">
		<img src="resource/23.png" alt="" class="bg">
		<img src="resource/24.png" alt="" class="bg">
		<img src="resource/25.png" alt="" class="bg">
		<img src="resource/26.png" alt="" class="bg">
		<img src="resource/27.png" alt="" class="bg">
		<img src="resource/28.png" alt="" class="bg">
		<img src="resource/29.png" alt="" class="bg">
		<img src="resource/30.png" alt="" class="bg">
		<img src="resource/31.png" alt="" class="bg">
		<img src="resource/32.png" alt="" class="bg">
	</div>
	<!-- 梯仔 -->
	<div id="tizai">
		<img src="resource/one.gif">
	</div>
  <!-- 开始 游戏规则页面 -->
	<div class="rule popover">
		<div class="text">
			<p class="_title">游戏规则</p>
			<p>
				曾经有一个实现愿望的机会<br>
				摆在我面前<br>
				我没有好好珍惜<br>
				如果能重来<br>
				我会选择<br>
				从华工毕业！！<br>
				(提示：游戏共有16个关卡，<br>
				而毕业路上的你只有三次<br>
				答题机会，每题只有30秒<br>
				思考时间沿途欣赏美景的<br>
				时候别忘了认真思考哦！)<br>
			</p>
			<div class="btn-replace"></div>
		</div>
		<!-- 开始按钮 -->
		<div class="button startBtn" data-name="游戏开始"><p>游戏开始</p></div>
	</div>
	<!-- 答题框架 -->
	<div class="qes_and_ans popover" id="qabox">
		<!-- 题目 -->
		<div class="question">
			<p id="question"></p>
		</div>
		    <!-- 选项A -->
				<div class="choose" id="choose_a">
					<div class="dot" id="dot_a"></div>
					<div class="answer">
						<p id="selection_a"></p>
					</div>
				</div>
				<!-- 选项B -->
				<div class="choose" id="choose_b">
					<div class="dot" id="dot_b"></div>
					<div class="answer">
						<p id="selection_b"><p/>
					</div>
				</div>
				<!-- 选项C -->
				<div class="choose" id="choose_c">
					<div class="dot" id="dot_c"></div>
					<div class="answer">
						<p id="selection_c"><p/>
					</div>
				</div>
				<!-- 选项D -->
				<div class="choose" id="choose_d">
					<div class="dot" id="dot_d"></div>
					<div class="answer">
						<p id="selection_d"><p/>
					</div>
				</div>
				<!-- 计时器和按钮占位框 -->
				<div class="replace"></div>
				<!-- 倒计时 -->
				<div class="count" id="timedown">30s</div>
				<div class="button" id="sub"><p>确定</p></div>
	</div>
	<!-- 对/错反馈 -->
	<div class="right result popover">
		<div class="info">
			<p>恭喜您答对了，<br>继续旅程吧</p>
		</div>
		<div class="button nextBtn">继续</div>
	</div>
	<div class="wrong result popover">
		<div class="info">
			<p>这次没有答对哦<br>请重新作答</p>
		</div>
		<div class="button" id="again_btn"><p>再来一次</p></div>
	</div>

	<!-- 成就页面 -->
	<div class="achievement popover" id="daxue">
		<div class="text">
			<p class="title">通关！成功毕业</p>
			<p>&nbsp;恭喜你成功从华工毕业<br>&nbsp;即将走上人生巅峰！</p>
			<p>【再次答题可体验不同题目】</p>
		</div>
		<div class="picture">
			<img class="daxue" src="resource/大学.png">
		</div>
	</div>

	<div class="achievement popover" id="zhongxue">
		<div class="text">
			<p class="title">真棒！答对10题</p>
			<p>&nbsp;达到华工附中毕业水平<br>&nbsp;重修一次说不定能拿到<br>&nbsp;华工毕业证哦！</p>
			<p>【再次答题可体验不同题目】</p>
		</div>
		<div class="picture">
			<img src="resource/附中.png">
		</div>
	</div>

	<div class="achievement popover" id="xiaoxue">
		<div class="text">
			<p class="title">哈哈 答对了X题</p>
			<p>&nbsp;达到华工附小毕业水平</p>
			<p>&nbsp;要拿到华工毕业证还是</p>
			<p>&nbsp;too young哟</p>
			<p>【再次答题可体验不同题目】</p>
		</div>
		<div class="picture">
			<img src="resource/小学.png">
		</div>
	</div>

	<div class="achievement popover" id="youeryuan">
		<div class="text">
			<p class="title">残念 只答对X题</p>
			<p>&nbsp;达到华工幼儿园毕业水平。。。拿到华工毕业证基本无望</p>
			<p>【再次答题可体验不同题目】</p>
		</div>
		<div class="picture">
			<img src="resource/幼儿园.png">
		</div>
	</div>

	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/question.js"></script>
	<script type="text/javascript" src="js/game.js"></script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"> </script>
	<script>
	wx.config({
		debug:true,//调试选true
		appId: '<?php echo $signPackage["appId"]; ?>',
		timestamp: '<?php echo $signPackage["timestamp"]; ?>',
		nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
		signature: '<?php echo $signPackage["signature"]; ?>',
		jsApiList:[
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
		]
    });

		wx.ready(function () {
				//分享给朋友
			wx.onMenuShareAppMessage({
				title: news['Title'],
				desc: news['Description'],
				link: news['Url'],
				imgUrl: news['PicUrl'],
			trigger: function (res) {
				//alert('用户点击发送给朋友');
			},
			success: function (res) {
				//alert('已分享');
			},
			cancel: function (res) {
				//alert('已取消');
			},
			fail: function (res) {
				//alert(JSON.stringify(res));
					alert('分享失败。。。');
			}
			});


			//分享到朋友圈
			wx.onMenuShareTimeline({
			title: news['Title'],
			link: news['Url'],
			imgUrl: news['PicUrl'],
			trigger: function (res) {
				//alert('用户点击分享到朋友圈');
			},
			success: function (res) {
				//alert('已分享');
			},
			cancel: function (res) {
				//alert('已取消');
			},
			fail: function (res) {
				//alert(JSON.stringify(res));
					alert('分享失败。。。');
			}
			});
		});


	

	//wx.error(function (res) {
	//  alert(res.errMsg);
	//});
</script>

<script src="http://demo.open.weixin.qq.com/jssdk/js/api-6.1.js?ts=1420774989"></script>

</body>

</html>
