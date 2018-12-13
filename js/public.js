
 jQuery( function(){
 //文字广告滚动
let navscroll =$(".top_nav_left_sc")[0].offsetLeft;
setInterval(
	function navScroll(){
 	navscroll-=10;
 	if(navscroll < 0){
 		navscroll =$(".top_nav_left")[0].offsetWidth;
 	}
 	$(".top_nav_left_sc")[0].style.left = navscroll + "px";
},100);
 


//搜索框-变宽
$(".soso_input")[0].onmouseover=function(){
	let _this = this;		
	this.style.width = 290+"px";
	
	document.documentElement.onmouseout=function(){
		setTimeout(()=>{
			_this.style.width = 120+"px";
			$(".seclect_soso")[0].style.display = "none";
		},3000);
		
	}
}
$(".soso_input")[0].onclick = function(){
	$(".seclect_soso")[0].style.display = "block";
}



//  导航栏固定
//	获取相关节点
	let nav = $('.nav')[0];
//	获取到nav距离页面顶部的距离
	let _top = nav.offsetTop;	
	// console.info(_top);
//	滚动事件
	document.onscroll = function(){
//		兼容写法
		let num = document.documentElement.scrollTop || document.body.scrollTop;
		// console.info(num);
		if(num >= _top){
			nav.style.position = 'fixed';
			
		}else{
			nav.style.position = 'relative';
		}
	}




	// 测边栏  回到顶部
	$('.event_top')[0].onclick = function(){
//		先获取到当前滚动条滚动的距离
		let num = document.documentElement.scrollTop || document.body.scrollTop;;
		scrollTop();
	
		function scrollTop(){
			if(num > 0){  
				num -= 100;
//				将获取的num值赋值给scrollTop
				document.documentElement.scrollTop = num;
				setTimeout(scrollTop,150);
			}
		}
	}


	//侧边栏 动画
	$('.icon_wechat')[0].onclick = function(){
		this.style.backgroundImge = "url(../img/generate_qrcode.jpg)";	
	}
	
});


	function $(str) { //#id  .class  tag
	if(str.charAt(0) == "#") { //'#a1'
		return document.getElementById(str.substring(1));
		} else if(str.charAt(0) == ".") { //.class
		return document.getElementsByClassName(str.substring(1));
		} else {
		return document.getElementsByTagName(str);
		}
	}


