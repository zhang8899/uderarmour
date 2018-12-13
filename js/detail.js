
//获取所有的li节点
	let aLi = $('#tabSmall').children;
	let small = $('#showSmalls').children;
	let mask = $('.mask')[0];
	let big = $('.showBig')[0];
	let x = y = 0;
	for(let i = 0; i < aLi.length;i++){
		aLi[i].onclick = function(){
			
			for(let j = 0; j<small.length;j++){
				small[j].className = '';
			}
			small[i].className = 'active';
			big.style.backgroundImage= "url("+ small[i].src+")";
			big.style.backgroundRepeat = 'no-repeat';
			big.style.backgroundSize = "892px 970px"; 
			big.style.backgroundColor ="white";
		}
	}
	$('#showSmall').onmouseover = function(){
		mask.style.display = "block";
		big.style.display = "block";

	}
	$('#showSmall').onmouseout = function(){
		mask.style.display = "none";
		big.style.display = "none";
		
	}
	
		$('#showSmall').onmousemove = function(event){
			let eve =  event || window.event;
			//获取 数据
			x = eve.clientX - $('#showSmall').offsetLeft -mask.offsetWidth/2;
			y = eve.clientY - $('#showSmall').offsetTop -mask.offsetHeight/2;
			//判断边界
			if(x<=0){
				x = 0;
			}else if(x >= $('#showSmall').offsetWidth -mask.offsetWidth){
				x = $('#showSmall').offsetWidth -mask.offsetWidth;
			}
			if(y<=0){
				y = 0;
			}else if(y >= $('#showSmall').offsetHeight -mask.offsetHeight){
				y = $('#showSmall').offsetHeight -mask.offsetHeight;
			}
			//改变样式
			mask.style.left = x + 'px';
			mask.style.top = y + 'px';
			// 计算 鼠标移动位置 占总距离的比例
			
			 // let	scalX = x/mask.offsetWidth*$('#showSmall').offsetWidth;
			 // let	scalY = y/mask.offsetHeight*$('#showSmall').offsetHeight;

			let	scalX = x/($('#showSmall').offsetWidth -mask.offsetWidth);
			let	scalY = y/($('#showSmall').offsetHeight -mask.offsetHeight);
			//改变右侧big 背景图 的定位位置
			big.style.backgroundPositionX = -scalX * (892 - big.offsetWidth) + 'px';
			big.style.backgroundPositionY = -scalY * (970 - big.offsetHeight) + 'px';
			 // big.style.backgroundPosition = (-1*1*x) +'px ' + (-1*1*y) + 'px';
			  // big.style.backgroundPosition = -scalX +'px ' + (-scalY) + 'px';
		}
		
		
	
	

      


	
