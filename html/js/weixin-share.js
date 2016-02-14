$(document).ready(function() {
  $.post('http://airnz.clients.inzen.com.cn/wechat/getticket', {
    url: location.href.split('#')[0]
  }).done(function(data) {
    data = eval('(' + data + ')'); 

    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appid, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.noncestr, // 必填，生成签名的随机串
      signature: data.signature,// 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });

    wx.ready(function(){
        wx.onMenuShareTimeline({
          title: '爱出花样20招get! 一“转”飞到新西兰', // 分享标题
          link: 'http://airnz.clients.inzen.com.cn/wechat/author', // 分享链接
          imgUrl: 'http://airnz.clients.inzen.com.cn/html/file/share.jpg', // 分享图标
          success: function () { 
            // 用户确认分享后执行的回调函数
            var url=window.location.hash;
            // alert(url);
            var type=1;
            // console.log($);
            $.post("http://airnz.clients.inzen.com.cn/wechat/sharecount",{
              openid:User,
              url:url,
              action:type
            },function(data){
              // alert(data);
            });
          },
          cancel: function () { 
            // 用户取消分享后执行的回调函数
          }
        });

      wx.onMenuShareAppMessage({
          title: '玩转20招 爱出花样', // 分享标题
          desc:'爱出花样20招get! 一“转”飞到新⻄兰!',
          link: 'http://airnz.clients.inzen.com.cn/wechat/author', // 分享链接
          imgUrl: 'http://airnz.clients.inzen.com.cn/html/file/share.jpg', // 分享图标
          success: function () { 
              // 用户确认分享后执行的回调函数
            var url=window.location.hash;
            // alert(url);
            var type=2;

            $.post("http://airnz.clients.inzen.com.cn/wechat/sharecount",{
              openid:User,
              url:url,
              action:type
            },function(data){
              // alert(data);
            });
          },
          cancel: function () { 
              // 用户取消分享后执行的回调函数
          }
      });
    });

  });

});




