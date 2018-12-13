


$(function(){		
		$("#btnLogin").click(function(){
		if($("#loginName").val() == undefined) {
		alert("请输入您的邮箱");
	} else {
		//1、
			$.post(
				"php/login.php",
				{
					"email":$("#loginName").val(),
					"password":$("#password").val()
				},
				function(data){					
					if(data=="1"){//登录成功！
						//记录cookie
						addCookie("email", $("#loginName").val(), 7);
						location.href="index.html";
					}else{
						alert("登录失败，用户名或者密码不对！");
						$("#passwordSpan").css("display" , "block");
					}
				}
			);
			}
		});
	});























//$("#btnLogin").onclick = function() {
//	if($("#loginName").value == undefined) {
//		alert("请输入您的邮箱");
//	} else {
//		let senStr = "email=" + $("#loginName").value + "&password=" + $("#password").value;
//	 	ajax03({
//	 	method:"post",	
//		url:"php/login.php",
//		param:senStr,
//		func:getData
//		});	
//}
//	function getData(str){
//		if(str == 0){
//			$("#passwordSpan").style.display = "block";
//		} else {
//			//保存cookie
//			addCookie("email", $("#loginName").value, 7);
//			location.href = "index.html";
//		}
//	}


