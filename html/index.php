<?php
$openid=$_GET['openid'];
setcookie('openid',$openid,time()+3600);
?>
<!DOCTYPE html>
<html ng-app="myApp">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>爱出花样</title>
<meta name="viewport" content="minimum-scale=0.5,initial-scale=0.5,maximum-scale=0.5,user-scalable=no" id="view">
<meta name="description" content="">
<meta name="keywords" content="">
<link href="css/reset.css" rel="stylesheet">
<link href="contribute/plane.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<!-- <link href="css/animate.css" rel="stylesheet"> -->
<script>
	var User='<?php echo $openid; ?>';
	// alert(User);
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?e083787c3668d18736b2519cd8c60e58";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<script src="contribute/js/angular.js"></script>
<script src="contribute/js/angular-route.js"></script> 
<script src="contribute/js/angular-resource.js"></script>
<script src="contribute/js/angular-animate.js"></script>
<script src="contribute/js/jquery.js"></script>
<script src="js/service.js"></script>
<script src="js/controllers.js"></script>
<script src="js/animation.js"></script>
<script src="js/app.js"></script>
<script src="js/prefixfree.min-de773054e90c52a3c2631c944681b64e.js"></script>
<script type="text/javascript" src="contribute/js/CSSPlugin.min.js"></script>
<script type="text/javascript" src="contribute/js/TweenLite.min.js"></script>
<script src="contribute/js/easeljs-0.6.0.min.js"></script>
<script src="contribute/js/tweenjs-0.4.0.min.js"></script>
<script src="contribute/js/movieclip-0.6.0.min.js"></script>
<script src="contribute/js/preloadjs-0.3.0.min.js"></script>
<script src="contribute/js/plane.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="js/weixin-share.js"></script>
</head>
<body>
	<!-- <audio src="file/bgm.mp3" autoplay></audio> -->
	<!-- <h1 ng-controller="whtCtrl">hahahah</h1> -->
	<div id="musicup"><img src="file/bgmo.png" class="mpp"/></div>
	<audio src="file/bgm.mp3" preload id="bgm"></audio>
	<audio src="file/effect.mp3" preload id="effect"></audio>
    <div ng-view style="height: 100%" class="view-content">
    	
    </div>
    <script src="js/stopExecutionOnTimeout-6c99970ade81e43be51fa877be0f7600.js"></script>
</body>
</html>
