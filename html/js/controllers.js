/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 17:49:55
 * @version $Id$
 */
var newzCtrl=angular.module("newzCtrl",[]);
newzCtrl.controller("globalCtrl",["$scope","$location","Http",function($scope,$location,Http){
    if(Http.loaddone){
        $location.path("/wht");
    }
    Http.loaddone=true;
}]);


newzCtrl.controller("WhtCtrl",function($scope,$location,View,Http){
    $scope.width=View.width;
    $scope.radio2=View.radio;
    $scope.kale=View.kale;
    var url="/html/index.php#/wht";
    // console.log("wht");
    // console.log(_hmt);
    _hmt.push(["_trackPageview",url]);
    // Http.loaddone=true;
    // $scope.ttd=totald

});

newzCtrl.controller('DetailCtrl',["$scope","$routeParams","View","$location",function($scope,$routeParams,View,$location){
    // console.log(totalhard);
    // console.log(totald);
	var width=View.width;
    var pagedata=totald[0];
    $scope.pageId=parseInt($routeParams.pageId)+1;
    $scope.showhl=true;

    var url="/html/index.php#"+$location.path();

    _hmt.push(["_trackPageview",url]);

    // alert("kk");
    // if(pagedata.hl==1){
    //     $scope.showhl=true;
    // }
    // else{
    //     $scope.showhl=false;
    // }
    $scope.click=function(){
        $scope.showhl=!$scope.showhl;
    }
    $scope.data=pagedata;
    $scope.width=width;
    var url="http://airnz.clients.inzen.com.cn/wechat/infouload";
    $.post(url,{
        pageid:$scope.pageId,
        openid:User
    },function(data){
        if(data.state=="fail"){
            alert(data.msg);
        }
    });

}]);



































