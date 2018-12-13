


   $('#regmail').onblur = function(){
	let pattarn = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	let str = this.value;
	if(str == ""){
	 	$('#regmailSpan').innerHTML ='内容不能为空';
	 }else if(!pattarn.test(str)){
		$('#regmailSpan').innerHTML ='邮箱格式不正确，请重新输入';	
	}else{
		checkemail();
//		console.log( typeof this.value );
	}
	
}
   $('#regpwd').onblur = function(){
	let pattarn = /^[a-z0-9_-]{6,18}$/;
	let str = this.value ;
	 if(str == ""){
	 	$('#regpwdSpan').innerHTML ='内容不能为空';
	 }else if(!pattarn.test(str)){
		$('#regpwdSpan').innerHTML ='8-16个字符，必须包含英文、数字、字符中的两种';
		$('#regpwdSpan').style.color = "red";
	}else{
		$('#regpwdSpan').innerHTML ='√';
		$('#regpwdSpan').style.color = "green";
	}
}
$('#regnextpwd').onblur = function(){
	
	let str = this.value;
	 let str2 = $('#regpwd').value;
	 if(str == ""){
	 	$('#regnextpwdSpan').innerHTML ='内容不能为空';
	 }else if(str == str2){
		$('#regnextpwdSpan').innerHTML ='两次密码一致';
		$('#regnextpwdSpan').style.color = "green";
	}else{
		$('#regnextpwdSpan').innerHTML ='两次密码不一致';
		$('#regpwdSpan').style.color = "red";
	}
}
$('#regphone').onblur = function(){
	let pattarn = /^[1][35789][\d]{9}$/;
	let str = this.value;
	if(str == ""){
	 	$('#regphoneSpan').innerHTML ='内容不能为空';
	 }else if(!pattarn.test(str)){
		$('#regphoneSpan').innerHTML ='手机号码格式不正确，请重新输入';
		$('#regpwdSpan').style.color = "red";
	}else{
		$('#regphoneSpan').innerHTML ='√';
		$('#regphoneSpan').style.color = "green";
	}
}


$('#regBtn').onclick = function(){
	ajax03({
		method:"post",	
		url:"php/adduser.php",
		param:"email="+$('#regmail').value+"&password="+ $('#regpwd').value+"&phone="+$('#regphone').value,
		func:succ
	});
}

function succ(str){

	alert("注册成功");
 
	location.href = "login.html";

 
}



function checkemail(){
	ajax03({
		method:"post",	
		url:"php/checkuser.php",
		param:"email="+$('#regmail').value,
		func:getData
	})
}

function getData(str){
	if(str ==0){
		$('#regmailSpan').innerHTML ='该用户邮箱已被注册';
		$('#regmailSpan').style.color = "red";
		
	}else{
		$('#regmailSpan').innerHTML ='该用户邮箱可用';
		$('#regmailSpan').style.color = "green";
	}
}










































