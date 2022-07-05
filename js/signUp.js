/*이름 한글만*/

// let nameInput = document.querySelector('#name');

// function onlyKorean() {
//   let pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
//   this.value = this.value.replace(pattern, '');
//   this.value = null;
//   alert('한글만 입력해주세요.');
  
// };
// nameInput.addEventListener('keypress', onlyKorean);

function hangul(){

	if((event.keyCode < 12592) || (event.keyCode > 12687)){

		alert("한글만 입력이 가능합니다.");

		event.returnValue = false

	}

}

