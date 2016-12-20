<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx893d27ac404487a1", "059c028d5993c377a7018211b1b4bd97");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8"/>
		<meta name="viewport" content = "width = device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" >
		<link rel="stylesheet" type="text/css" href="css/zhu.css">
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script data-main = "app.js" type="text/javascript" src = "js/require.js"></script>
		<link rel="stylesheet" href="css/swiper-3.4.0.min.css">
		<style>
			/*.swiper-container {
			    width: 100%;
			    height: 3rem;
			}*/
		</style>
	</head>
	<body>
		<header>
			<p class="p_1">
				<a href="#">
					<img src="imgs/1.jpg"/><br/>
					<b>&nbsp;&nbsp;扫一扫</b>
				</a>
			</p>
			<span calss="span_a">
				黄平路附近
			</span>
			<p class="p_2">
				<a href="#">
					<img src="imgs/a1.png"/><br/>
					<b>搜 索&nbsp;&nbsp;</b>
				</a>
			</p>
		</header>
		<div class="mains">
			<div class="home"></div>
			<div class="market"></div>
			<div class="order"></div>
			<div class="mine"></div>
		</div>
		
		<footer calss="footer">
			<figure>
				<img src="imgs/01.png">
				<figcaption><a href="#home">首页</a></figcaption>
			</figure>
			<figure>
				<img src="imgs/02.png" style="margin-left:0.15rem">
				<figcaption><a href="#market">闪送超市</a></figcaption>
			</figure>
			<figure>
				<img src="imgs/03.png">
				<figcaption><a href="#order">购物车</a></figcaption>
				<span id="shop"></span>
			</figure>
			<figure>
				<img src="imgs/04.png">
				<figcaption><a href="#mine">我的</a></figcaption>
			</figure>
		</footer>
		<div id="mydiv"></div>
	</body>
	<script type="text/javascript">
		wx.config({
		    debug: true,
		    appId: '<?php echo $signPackage["appId"];?>',
		    timestamp: <?php echo $signPackage["timestamp"];?>,
		    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		    signature: '<?php echo $signPackage["signature"];?>',
		     jsApiList: [
		        'checkJsApi',
		        'hideMenuItems',
		        'showMenuItems',
		        'hideAllNonBaseMenuItem',
		        'showAllNonBaseMenuItem',
		        'translateVoice',
		        'startRecord',
		        'stopRecord',
		        'onVoiceRecordEnd',
		        'playVoice',
		        'onVoicePlayEnd',
		        'pauseVoice',
		        'stopVoice',
		        'uploadVoice',
		        'downloadVoice',
		        'chooseImage',
		        'previewImage',
		        'uploadImage',
		        'downloadImage',
		        'getNetworkType',
		        'openLocation',
		        'getLocation',
		        'hideOptionMenu',
		        'showOptionMenu',
		        'closeWindow',
		        'scanQRCode',
		        'chooseWXPay',
		        'openProductSpecificView',
		        'addCard',
		        'chooseCard',
		        'openCard'
		      ]
		  });
	</script>
</html>