
    $('#showTime').click(function(){
        printTime();
    });



function printTime() {
var clock = document.getElementById("clock");
var now = new Date();

clock.innerHTML = now.getFullYear() + "년 " +
(now.getMonth()+1) + "월 " +
now.getDate() + "일 " +
now.getHours() + "시 " +
now.getMinutes() + "분 " +
now.getSeconds() + "초";

setTimeout("printTime()", 1000);
}
