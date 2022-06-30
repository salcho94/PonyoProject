/*
로그인을 뿌뿌잉
로그인 아이디 : hello
로그인 비번 : 123
성공시 성공창
실패시 아이디 또는 비밀번호가 틀립니다.

*/


function login() {

    let id = $("#userID").val();
    let pass = $("#userPassword").val();

    if ( id === "hello" && pass === "123" ) {
        alert("로그인 성공");
    } else if( id === "hello" && pass !== "123" ){
        alert("비밀번호가 틀렸어용");
    } else if( id !== "hello" && pass === "123" ){
        alert("아이디가 틀렸어용");
    } else {
        alert("아이디와 비밀번호를 확인해주세요.");
    }

}


