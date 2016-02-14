<?php
$openid=$_GET['openid'];
echo $openid;

?>



<!DOCCTYPE html>
<html>
<head>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
$("button").each(function(index,ele){
$(ele).click(function(){
$.post('/wechat/author',{action:"1"},function(res){alert(res);});


});
});
});

</script>
</head>
<body>
<button>a</button>	

</body>
