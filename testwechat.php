<?php
@header('Content-type: text/html;charset=UTF-8');
$appID="wx3ca08c66002dada3";
$appSECRET="15226b4869abe2a53c68e0eb0dea775a";
$code=$_GET['code'];
$token_url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appID&secret=$appSECRET&code=$code&grant_type=authorization_code";
$curl=curl_init();
curl_setopt($curl,CURLOPT_URL,$token_url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
$token_temp=curl_exec($curl);
curl_close($curl);
$token=json_decode($token_temp,true);
$token_string=$token['access_token'];
$openid_string =$token['openid'];
// echo "token:";
// echo $token_string;
// echo "<br>";
// echo "openid:";
// echo $openid_string;

$userinfo_url ="https://api.weixin.qq.com/sns/userinfo?access_token=$token_string&openid=$openid_string&lang=zh_CN";
$curl=curl_init();
curl_setopt($curl,CURLOPT_URL,$userinfo_url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
$userinfo_temp=curl_exec($curl);
curl_close($curl);
$userinfo=json_decode($userinfo_temp,true);
print_r($userinfo);
echo $userinfotemp;







?>
