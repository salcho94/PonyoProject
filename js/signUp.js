/*이름 한글만*/
$("#name").keyup(function(event){
	if (!(event.keyCode >=37 && event.keyCode<=40)) {
		var inputVal = $(this).val();
	$(this).val(inputVal.replace(/[a-z0-9]/gi,''));		
	}
});

/*별명 영어만*/
$("#nickname").keyup(function(event){
	if (!(event.keyCode >=37 && event.keyCode<=40)) {
	var inputVal = $(this).val();
	$(this).val(inputVal.replace(/[^a-z]/gi,''));
	}
});

/*번호 숫자만*/
$("#phone").keyup(function(event){
	if (!(event.keyCode >=37 && event.keyCode<=40)) {
	var inputVal = $(this).val();
	$(this).val(inputVal.replace(/[^0-9]/gi,''));
	}
});

/*비밀번호 재확인*/
function passWord() {
	const p1 = document.getElementById('password1').value;
	const p2 = document.getElementById('password2').value;
	if(p1.length < 6) {
		alert('비밀번호는 6글자 이상이어야 합니다.');
		return false;
	}
	if( p1 != p2 ) {
		alert("비밀번호가 틀립니다.");
		return false;
	} 
}