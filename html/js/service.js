/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 19:38:47
 * @version $Id$
 */
// var totaldata=1;
var newzService=angular.module("newzService",["ngResource"]);

newzService.factory("Http",function($http,$location,$timeout){
	var promise=$http({
		method:"GET",
		url:"http://airnz.clients.inzen.com.cn/airnzapi/airnzcampaign"
	});

	num_arr=[Math.floor(Math.random()*20)];
	sessionStorage.num=JSON.stringify(num_arr);
	var loaddone=false;
	var zxopa=false;

	var sj=[];
	var hardsj=[];
	// var user=navigator.userAgent;

	var url=$location.protocol()+"://"+$location.host()+":"+$location.port()+"/html";
	var hard=[
		url+"/file/logo-04.png",
		url+"/file/font-03.png",
		url+"/file/11-01.png",
		url+"/file/circle.png",
		url+"/file/main.jpg",
		url+"/file/hy.png",
		url+"/file/down.png",
		url+"/file/change.png",
		url+"/file/share.png",
		url+"/file/wht2.jpg",
		url+"/file/wht3.jpg",
		url+"/file/wht9.jpg",
		url+"/file/hl.png",
		url+"/file/share2.png",
		url+"/file/notice.png"
		];

	var i=0;

	var bg=new Audio();
    var effect=new Audio();
    var musicup=document.getElementById("musicup");

    // var bg=document.getElementById("bgm");
    // var effect=document.getElementById("effect");

    function mopa(x,y){
    	$("#musicup").animate({opacity:0},800,function(){
    		$(this).css({left:x+"rem",
    			         top:y+"rem"
					    });
    		$(this).animate({opacity:1},800);
    	})
    }

    function effectp(){
    	effect.play();
    }

    function effects(){
    	effect.pause();
    }

    function nextp(){
    	bg.play();
    }

	function getFont(i,data){
		WebFont.load({
			custom:{
				families:["NZ"]
			},
			fontactive:function(){
				hImg(num_arr[0],data);
			},
			fontinactive:function(){
				hImg(num_arr[0],data);
			}
		})
	}
	function tz(){
		clearTimeout(createjs.Ticker.timeoutID);
		jQuery.fx.stop();
		$timeout(function(){
			$location.path("/wht");
		})
	}

	function hImg(i,data){
		var obj={};

		var arr=[];

		var img1=new Image();
		img1.onload=function(){
			img1.className="wa";
			arr.push(img1);
			var img2=new Image();
			img2.onload=function(){
				// alert("done");
				img2.className="cback";
				img2.id="bbk";
				arr.push(img2);
				deal(i,arr,data[i]);
					totalhard=hardsj;
					totald=sj;
					loaddone=true;
					loadstate.push(true);
					tz();
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
		sj.push(obj);
	}
	var j=0;


	function getImage2(data){
		// console.log(data);
		var img=new Image();
		var i=0;
		img.onload=function(){
			hardsj.push(img);
			j=j+1;
			// console.log(hardsj);
			if(j<hard.length){
				getImage2(data);
			}
			else{
				// alert("img done");
				hImg(num_arr[0],data);
				// getFont(i,data);
			}
		}
		img.src=hard[j];
	}


	promise.success(function(data){
		// alert("ss");
		console.log(data);
		infodata=data;
		// getImage2(data);
		// if(user.indexOf("iPhone")!=-1){
		// 	bg.src="file/bgm.mp3";
		// 	effect.src="file/effect.mp3";
		// 	bg.loop=true;
		// 	getImage2(data);
		// }
		// else{
	    bg.addEventListener("canplaythrough",function(){
	    	console.log("bmg");
	    	bg.loop=true;
	    	effect.addEventListener("canplaythrough",function(){
	    		console.log("effect");
	    		getImage2(data);
	    	},false);
	    	effect.src="file/effect.mp3";
	    	effect.load();
	    },false);
	    bg.src="file/bgm.mp3";
	    bg.load();
	// }
	});

	return{
		name:"ll",
		loaddone:loaddone,
		shown:true,
		bg:bg,
		effect:effect,
		effectp:effectp,
		effects:effects,
		mopa:mopa,
		musicup:musicup,
		zxopa:zxopa,
		nextp:nextp
	}


	
})

newzService.factory("View",function(){
	var use=navigator.userAgent,
		width,
		height,
		audio,
		bl;
	if(use.indexOf("iPhone")!=-1){
			width=document.documentElement.clientWidth;
			height=document.documentElement.clientHeight;
			audio=false;

			if(width==640||width==1136){
				$("html").css("fontSize","34.782px");
				bl=1.2;
			}
			else if(width==750||width==1334){
				$("html").css("fontSize","40.76px");
				bl=1.4;
			}
			else if(width==828||width==1472){
				$("html").css("fontSize","45px");
				bl=1.55;
			}
		}

		else{
			audio=true;
			var view=document.getElementById("view");
			view.content="width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=1,user-scalable=no";
			width=document.documentElement.clientWidth;
			height=document.documentElement.clientHeight;

			var nb=width/818,
			    nrem=nb*45;
			bl=1.55*nb;
			$("html").css("fontSize",nrem+"px");

		}

		var rem=parseInt($("html").css("fontSize"));
		var radio2=5.2666*rem;
		var Kaleidoscope;



		(function () {
		    var DragDrop,c, dragger, gui, i, image, len, onChange, onMouseMoved, options, ref, tr, tx, ty, update, bind = function (fn, me) {
		            return function () {
		                return fn.apply(me, arguments);
		            };
		        };
		    Kaleidoscope = function () {
		        Kaleidoscope.prototype.HALF_PI = Math.PI / 2;
		        Kaleidoscope.prototype.TWO_PI = Math.PI * 2;
		        function Kaleidoscope(options1) {
		            var key, ref, ref1, val;
		            this.options = options1 != null ? options1 : {};
		            this.defaults = {
		                offsetRotation: 0,
		                offsetScale: 1,
		                offsetX: 0,
		                offsetY: 0,
		                radius: radio2,
		                slices: 12,
		                zoom: 1
		            };
		            ref = this.defaults;
		            for (key in ref) {
		                if (window.CP.shouldStopExecution(1)) {
		                    break;
		                }
		                val = ref[key];
		                this[key] = val;
		            }
		            window.CP.exitedLoop(1);
		            ref1 = this.options;
		            for (key in ref1) {
		                if (window.CP.shouldStopExecution(2)) {
		                    break;
		                }
		                val = ref1[key];
		                this[key] = val;
		            }
		            window.CP.exitedLoop(2);
		            if (this.domElement == null) {
		                this.domElement = document.createElement('canvas');
		            }
		            if (this.context == null) {
		                this.context = this.domElement.getContext('2d');
		            }
		            if (this.image == null) {
		                this.image = document.createElement('img');
		            }
		        }
		        Kaleidoscope.prototype.draw = function () {
		            var cx, i, index, ref, results, scale, step;
		            this.domElement.width = this.domElement.height = this.radius * 2;
		            this.context.fillStyle = this.context.createPattern(this.image, 'repeat');
		            scale = this.zoom * (this.radius / Math.min(this.image.width, this.image.height));
		            step = this.TWO_PI / this.slices;
		            cx = this.image.width / 2;
		            results = [];
		            for (index = i = 0, ref = this.slices; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
		                if (window.CP.shouldStopExecution(3)) {
		                    break;
		                }
		                this.context.save();
		                this.context.translate(this.radius, this.radius);
		                this.context.rotate(index * step);
		                this.context.beginPath();
		                this.context.moveTo(-0.5, -0.5);
		                this.context.arc(0, 0, this.radius, step * -0.51, step * 0.51);
		                this.context.lineTo(0.5, 0.5);
		                this.context.closePath();
		                this.context.rotate(this.HALF_PI);
		                this.context.scale(scale, scale);
		                this.context.scale([
		                    -1,
		                    1
		                ][index % 2], 1);
		                this.context.translate(this.offsetX - cx, this.offsetY);
		                this.context.rotate(this.offsetRotation);
		                this.context.scale(this.offsetScale, this.offsetScale);
		                this.context.fill();
		                results.push(this.context.restore());
		            }
		            window.CP.exitedLoop(3);
		            return results;
		        };
		        return Kaleidoscope;
		    }();
}.call(this));



		return {
			width:width,
			height:height,
			radio:radio2,
			bl:bl,
			kale:Kaleidoscope,
			audio:audio
		}
})
