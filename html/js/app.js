/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 17:13:33
 * @version $Id$
 */
var totalhard=1,
    totald=2,
    num_arr=[],
    loadstate=[],
    infodata,
    index=0;
    playing=true;

var app=angular.module("myApp",["ngRoute","newzCtrl","newzService","ngAnimate"]);

app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"template/load.html",
		controller:"globalCtrl"
	}).
	when("/wht",{
		templateUrl:"template/wht.html",
		controller:"WhtCtrl"
	}).
	when("/page/:pageId",{
		templateUrl:"template/detail.html",
		controller:"DetailCtrl"
	}).
	otherwise({
		redirectTo:"/"
	})
}]);
app.directive("pic",function($location,$timeout,Http,View){
	return {
		restrict:"A",
		link:function(scope,ele,attr){


			$(".backinner").append(scope.data.back);
			$(".c_backp").append(scope.data.wa);

			$(".wa").css({
				left:(scope.width-$(".wa").width())/2
			});

			var sWidth=scope.width;
			var ewidth=$("#bbk").width();
			console.log(ewidth);
			if(ewidth<sWidth){
				$("#bbk").removeClass("cback").addClass("cback2");
			}
			else{
				$("#bbk").css({left:(sWidth-ewidth)/2+"px"});

			}

			$("#change")[0].addEventListener("touchstart",function(e){
				$timeout(function(){
					$location.path("/wht");
				},1);
				return false;
			},false);


			$("#dcr")[0].addEventListener("touchstart",function(e){
				e.preventDefault();
				var url="/html/index.php#dr";
				_hmt.push(["_trackPageview",url]);
				$("#dr").css("display","block").animate({opacity:1},500);
			},false);


			$("#close1")[0].addEventListener("touchstart",function(){
				$("#dr").animate({opacity:0},500,function(){
					$(this).css("display","none");
				});
			})


			$("#share")[0].addEventListener("touchstart",function(e){
				var url="/html/index.php#diss";
				_hmt.push(["_trackPageview",url]);
				$("#diss").css("display","block").animate({opacity:1},500);
				return false;
			},false);

			$("#diss")[0].addEventListener("touchstart",function(e){
				var str=e.target.id;
				if(str=='diss'){
					$(this).animate({opacity:0},800,function(){
						$(this).css("display","none");
					});
				}
			},false);




			if(scope.data.hl==1){
				$timeout(function(){
					// alert("showhl");
					scope.showhl=false;
				},2500);
			}


			if(View.audio&&playing){
				// alert("ss");
				Http.effect.addEventListener("ended",Http.nextp,false);
			}



			Http.mopa(0,0);





			setTimeout(function(){
				var sPosY,
			    min=$("#txt").height(),
			    max=$("#txt2").height(),
			    top=$(".xly").position().top,
			    click=true;
				// $location.path("/wht");

			$("#dup")[0].addEventListener("touchstart",function(e){
				e.preventDefault();
				if(e.touches.length==1){
					click=true;
					sPosY=e.touches[0].pageY;
					$("#txt").removeClass("rtext").addClass("autotext");
					// e.preventDefault();
				}
			},false);

			$("#dup")[0].addEventListener("touchmove",function(e){
				if(e.touches.length==1){
					e.preventDefault();
					click=false;

					// $("#txt").removeClass("rtext").addClass("autotext");
					var ePosY=e.touches[0].pageY;
					var disY=ePosY-sPosY;
					sPosY=ePosY;
					// e.preventDefault();
					// var eleh=ele[0].offsetTop+disY;
					// console.log(eleh)
					var txth=$("#txt").height()+disY;
					var hyh=$(".xly").position().top+disY;

					if(txth>min&&txth<max){
						$("#txt").css("height",txth+"px");
						$(".xly").css("top",hyh+"px");
					}
				}
			})

			$("#dup")[0].addEventListener("touchend",function(){
				// alert("ja");
			var txth=$("#txt").height();
			if(!click){
				if(txth-min>(max-min)/2){
					// console.log("kk");
					var endt=top+(max-min);
					$("#txt").animate({height:max+"px"},100).removeClass("rtext").addClass("autotext");
					$(".xly").animate({top:endt+"px"},100);
					$("#zz").attr("src","file/up.png");
				}
				else{
					$("#txt").animate({height:min+"px"},100).removeClass("autotext").addClass("rtext");
					$(".xly").animate({top:top+"px"},100);
					$("#zz").attr("src","file/down.png");
				}
			}
			else{
				if(txth==min){
					// console.log("kk");
					var endt=top+(max-min);
					$("#txt").animate({height:max+"px"},100).removeClass("rtext").addClass("autotext");
					$(".xly").animate({top:endt+"px"},100);
					$("#zz").attr("src","file/up.png");
				}
				else{
					$("#txt").animate({height:min+"px"},100).removeClass("autotext").addClass("rtext");
					$(".xly").animate({top:top+"px"},100);
					$("#zz").attr("src","file/down.png");
				}
			}
			},false);
			},200);

            totald.shift();
            loadstate.shift();
            // totalhard=null;
		}
	}
});

app.directive("plane",function(Http){
	return {
		restrict:"A",
		link:function(scope,ele,attr){
			// console.log(scope);
			var width=ele[0].offsetWidth,
				height=ele[0].offsetHeight;
				// bl=scope.bl;

				var tTop;

				console.log(width);
				console.log(height);


		       var bgaudio=Http.bg;

			    var play=document.getElementById("musicup");
			    play.addEventListener("touchstart",function(){
			    	if(bgaudio.paused){
			    		playing=true;
			    		bgaudio.play();
			    		$(".mpp").attr("src","file/bgmo.png");
			    	}
			    	else{
			    		playing=false;
			    		Http.effect.removeEventListener("ended",Http.nextp,false);
			    		bgaudio.pause();
			    		$(".mpp").attr("src","file/bgmd.png");
			    	}
			    },false);


			$(".loadingBar")[0].onload=function(){
				// alert("ll");
				var eheight=$(".loadingBar").height();
				var canvas = document.getElementById("canvas");
				tTop=(height-eheight)/2;

				canvas.style.top=tTop+"px";

				$(".loadingBar").css({
					top:(height-eheight)/2+"px",
				})
			}


			var canvas, stage, exportRoot;

			function init() {
				createjs.MotionGuidePlugin.install();

				canvas = document.getElementById("canvas");
				images = images||{};

				var manifest = [
					{ src: "file/bg_cricle.png", id: "bg_cricle" },
					{ src: "file/line.png", id: "line" },
					{ src: "file/plan2.png", id: "plan2" }
				];

				var loader = new createjs.LoadQueue(false);
				loader.addEventListener("fileload", handleFileLoad);
				loader.addEventListener("complete", handleComplete);
				loader.loadManifest(manifest);
			}
			init();

			function handleFileLoad(evt) {
				if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
			}

			function handleComplete() {
				exportRoot = new lib.plane();

				stage = new createjs.Stage(canvas);
				stage.addChild(exportRoot);
				stage.update();

				createjs.Ticker.setFPS(30);
				createjs.Ticker.addEventListener("tick", stage);
			}

			
		}
	}
			
});

// app.directive("jz",function(){
// 	return {
// 		restrict:"A",
// 		link:function(scope,ele,attr){

// 			ele[0].onload=function(){
// 				var height=scope.height;
// 				console.log(height);
// 				console.log(ele[0].offsetHeight);
// 				var top=(height-ele[0].offsetHeight)/2;
// 				$(ele[0]).css("top",top+"px");
// 			}
// 		}
// 	}
// })



app.directive("wht",function($location,$timeout,Http,View){
	return {
		restrict:"A",
		link:function(scope,ele,attr){
			console.log(scope);
			// console.log(window.location.hash);
			var width=scope.width,
			    radio2=scope.radio2,
			    Kaleidoscope=scope.kale,
			    // zxopa=false,
			    wan=ele[0],
			    len=infodata.length,
			    start=new Date(),
			    pic=["file/wht2.jpg","file/wht3.jpg","file/wht9.jpg"];

	    if(index>=pic.length){
	    	index=0;
	    }

	    // $location.path("/page/0");

		var head=document.getElementsByTagName("head")[0];
		var link=document.createElement("link");
		link.href="css/animate.css";
		link.rel="stylesheet";
		head.appendChild(link);



		$("#wcr")[0].addEventListener("touchstart",function(e){
			// alert("lll");
			var url="/html/index.php#cr";
			_hmt.push(["_trackPageview",url]);
        	window.removeEventListener("devicemotion",onMation,false);
			e.preventDefault();
			$("#cr").css("display","block").animate({opacity:1},500);
		},false);

        $("#close2")[0].addEventListener("touchstart",function(){
        	window.addEventListener("devicemotion",onMation,false);
        	$("#cr").animate({opacity:0},500,function(){
        		$(this).css("display","none");
        	});
        },false);



    var image = new Image();
    image.onload = function (_this) {
        return function () {
            return kaleidoscope.draw();
        };
    }(this);
    image.src = pic[index];
    index=index+1;
    kaleidoscope = new Kaleidoscope({
        image: image,
        slices: 20
    });
    kaleidoscope.domElement.style.position = 'absolute';
    kaleidoscope.domElement.style.marginLeft = -kaleidoscope.radius + 'px';
    kaleidoscope.domElement.style.marginTop = -kaleidoscope.radius + 'px';
    kaleidoscope.domElement.style.left = '50%';
    kaleidoscope.domElement.style.top = '50%';
    kaleidoscope.domElement.style.zIndex = 100;

			

    wan.appendChild(kaleidoscope.domElement);

    tx = kaleidoscope.offsetX;
    ty = kaleidoscope.offsetY;
    tr = kaleidoscope.offsetRotation;
    var speedX=0,
        speedY=0,
        interval=8,
        tz=true,
        num,
        timerr;
        // update;


        // console.log(totald);



	    function hImg(i,data){
			// alert("himg");
			var obj={};

			var arr=[];

			var img1=new Image();
			img1.onload=function(){
				img1.className="wa";
				arr.push(img1);
				var img2=new Image();
				img2.onload=function(){
					img2.className="cback";
					img2.id="bbk";
					arr.push(img2);
					deal(i,arr,data[i]);
						loadstate.push(true);
				}
				img2.src=data[i].backgroud;
			}
			img1.src=data[i].copy;
		}


	function deal(i,arr,data){
		var obj={};
		obj.back=arr[1];
		obj.wa=arr[0];
		obj.text=data.description;
		obj.hl=data.charge;
		obj.num=i;
		totald.push(obj);
	}

    var inArr=function(arr,num){
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i])==num){
                // num=Math.ceil(Math.random()*20);
                return true;
            }
        }
        return false;
    }


    // alert(len);


    var set=function(num){
        var endurl="/page/"+num;

        $timeout(function(){
        	$location.path(endurl);
        },1)

        // window.location.href=endurl;
    }


    var getRandom=function(){
        num=Math.floor(Math.random()*len);
        if(!sessionStorage["num"]){
            num_arr.push(num);
            sessionStorage.num=JSON.stringify(num_arr);
            hImg(num,infodata);
        }
        else{
            num_arr=JSON.parse(sessionStorage["num"]);
            var length=num_arr.length;
            if(length<len){
                var result=inArr(num_arr,num);
                if(result){
                    getRandom();
                }
                else{
                    num_arr.push(num);
                    sessionStorage.num=JSON.stringify(num_arr);
		            hImg(num,infodata);
                    return num;
                }
            }
            else{
                sessionStorage.num="";
                num_arr=[];
                num_arr.push(num);
                sessionStorage.num=JSON.stringify(num_arr);
		        hImg(num,infodata);
                return num;
            }
        }
    }

    var musicup=Http.musicup;

    if(Http.zxopa){
    	// alert("jj");
    	Http.mopa(0.5,0.5);
    }


    // alert("kkk");
    // musicup.style.display="block";
    // Http.bg.play();

    // if(!Http.shown){
	   //  window.addEventListener("devicemotion",onMation,false);	
    // }

    // if(Http.shown){
    // 	$(".notice_back").css("display","block");
    // 	$(".notice_back").animate({opacity:1},1000);
    // 	Http.shown=false;
    // }

    // $("#closen")[0].addEventListener("touchstart",function(){
    // 	alert("kk");
    // 	$(".notice_back").animate({opacity:0},1000,function(){
    // 		$(".notice_back").css("display","none");
    // 	})
	   //  window.addEventListener("devicemotion",onMation,false);	
    // },false);

    // getRandom();
    // console.log(totald);

    // img.onload=function(){
    	// $("#musicup").css("left","1rem").css("top","1rem");
    // 	$(".circle")[0].onclick=function(){
	   //  	if(loadstate[0]){
    // 			if(View.audio&&playing){
    //     			Http.bg.pause();
    // 			}
    // 			// if(playing){
				// Http.effectp();
    // 			// }
	   //  		// Http.effectp();
		  //   	cancelAnimationFrame(timerr);
		  //   	kaleidoscope=null;
	   //  		window.removeEventListener("devicemotion",onMation,false);
	   //  		set(totald[0].num);
	   //  	}
	   //  	// kaleidoscope=null;

    // 	}
    // }

    // alert(tz);
    onMation = function (_this) {
        return function (event) {
            var cx, cy, dx, dy, hx, hy;
            cx = window.innerWidth / 2;
            cy = window.innerHeight / 2;
            var acc=event.accelerationIncludingGravity;
            var aX=acc.x;
            var aY=acc.y;
            var distanceX=speedX*interval+(aX*Math.pow(interval,2))/2;
            var distanceY=speedY*interval+(aY*Math.pow(interval,2))/2;
            dx = distanceX / window.innerWidth;
            dy = distanceY / window.innerHeight;
            hx = dx - 0.5;
            hy = dy - 0.5;
            tx = hx * kaleidoscope.radius * -2;
            ty = hy * kaleidoscope.radius * 2;
            speedX=aX*interval;
            speedY=aY*interval;
            // if(Math.abs(aY)>2||Math.abs(aX)>2){
            // 	// timerr=setInterval(update,1000/60);
            // }
            // if(Math.abs(aY)<2&&Math.abs(aX)<2){
            // 	// clearInterval(timerr);
            // }
            if(Math.abs(aX)>5&&loadstate[0]&&tz){
            	var now=new Date();
            	if(now-start>3000){
            		tz=false;
        		// Http.effectp();
            		setTimeout(function(){
            			if(View.audio&&playing){
            				// alert("kk");
	            			Http.bg.pause();
            			}
            			// if(playing){
            			// }
            			Http.effectp();
	            		cancelAnimationFrame(timerr);
				    	kaleidoscope=null;
			    		window.removeEventListener("devicemotion",onMation,false);
			    		set(totald[0].num);
            		},3000)
			    	// kaleidoscope=null;
            	}
            }
            return tr = Math.atan2(hy, hx);
        };
    }(this);

    // alert("kkk");
    // window.addEventListener('mousemove', onMouseMoved, false);
    // window.addEventListener("devicemotion",onMation,false);
    options = {
        interactive: true,
        ease: 0.1
    };
    // alert(window.requestAnimationFrame);

    (update = function (_this) {
        return function () {
        	console.log("wht");
            var delta, theta;
            if (options.interactive) {
                delta = tr - kaleidoscope.offsetRotation;
                theta = Math.atan2(Math.sin(delta), Math.cos(delta));
                kaleidoscope.offsetX += (tx - kaleidoscope.offsetX) * options.ease;
                kaleidoscope.offsetY += (ty - kaleidoscope.offsetY) * options.ease;
                kaleidoscope.offsetRotation += (theta - kaleidoscope.offsetRotation) * options.ease;
                kaleidoscope.draw();
            }
            timerr=requestAnimationFrame(update);
        };
    }(this))();
    // alert("kkk");
    getRandom();

     if(!Http.shown){
	    window.addEventListener("devicemotion",onMation,false);	
    }

    if(Http.shown){
    	// alert("kkk");
    	$(".notice_back").css("display","block");
    	$(".notice_back").animate({opacity:1},1000);
    	Http.shown=false;
    	cancelAnimationFrame(timerr);	
    }

    $("#closen")[0].addEventListener("touchstart",function(){
    	Http.zxopa=true;
    	$(musicup).css({left:"0.5rem",top:"0.5rem"});
    	musicup.style.display="block";
    	Http.bg.play();
    	$(".notice_back").animate({opacity:0},1000,function(){
    		$(".notice_back").css("display","none");
    	});
    	timerr=requestAnimationFrame(update);
	    window.addEventListener("devicemotion",onMation,false);	
    },false);
		}
	}
});
















