/*이름 한글만*/
function onlyKorean(idName) {
	const str = document.getElementById('idName').value;
	let count = 0;
	for (i = 0; i < str.length; i++) { 
				if (!((str.charCodeAt(i) > 0x3130 && str.charCodeAt(i) < 0x318F) || (str.charCodeAt(i) >= 0xAC00 && str.charCodeAt(i) <= 0xD7A3))) {
					 (count == 0 ?alert("한글만 입력해 주세요"): '');
					 document.getElementById('idName').value='';
							 count++
				}
		 }
}

/*별명 영어만*/
$("#nickname").keyup(function(event){
	if (!(event.keyCode >=37 && event.keyCode<=40)) {
	var inputVal = $(this).val();
	$(this).val(inputVal.replace(/[^a-z]/gi,''));
	}
});

/*번호 숫자만*/
// $("#phone").keyup(function(event){
// 	if (!(event.keyCode >=37 && event.keyCode<=40)) {
// 	var inputVal = $(this).val();
// 	$(this).val(inputVal.replace(/[^0-9]/gi,''));
// 	}
// });

$("#phone").on("keyup", function(event) {
	if (event.which && (event.which  > 47 && event.which  < 58 || event.which == 8)) {			
	} else {
			alert('숫자만 입력해주세요.');
			$(this).val($(this).val().replace(/[^0-9]/g,""));
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

/*주소*/
function sample6_execDaumPostcode() {
		new daum.Postcode({
				oncomplete: function(data) {
						// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

						// 각 주소의 노출 규칙에 따라 주소를 조합한다.
						// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
						var addr = ''; // 주소 변수
						var extraAddr = ''; // 참고항목 변수

						//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
						if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
								addr = data.roadAddress;
						} else { // 사용자가 지번 주소를 선택했을 경우(J)
								addr = data.jibunAddress;
						}

						// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
						if(data.userSelectedType === 'R'){
								// 법정동명이 있을 경우 추가한다. (법정리는 제외)
								// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
								if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
										extraAddr += data.bname;
								}
								// 건물명이 있고, 공동주택일 경우 추가한다.
								if(data.buildingName !== '' && data.apartment === 'Y'){
										extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
								}
								// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
								if(extraAddr !== ''){
										extraAddr = ' (' + extraAddr + ')';
								}
								// 조합된 참고항목을 해당 필드에 넣는다.
								document.getElementById("sample6_extraAddress").value = extraAddr;
						
						} else {
								document.getElementById("sample6_extraAddress").value = '';
						}

						// 우편번호와 주소 정보를 해당 필드에 넣는다.
						document.getElementById('sample6_postcode').value = data.zonecode;
						document.getElementById("sample6_address").value = addr;
						// 커서를 상세주소 필드로 이동한다.
						document.getElementById("sample6_detailAddress").focus();
				}
		}).open();
}