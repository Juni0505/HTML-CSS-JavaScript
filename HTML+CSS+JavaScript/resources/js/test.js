// <script> 태그는 작성하지 않음.
// 팝업 창 종류
// 1. alert - 확인
alert('이건alert');
// 2. comfirm - 확인 or 취소 (true/false 값이 return됨)
 var confirmValue = confirm("컴펌창");
 alert(confirmValue);
 console.log(confirmValue);
// 3. prompt - 입력받는창 - 확인/취소 (입력한 값이 return 됨)
var promptValue = prompt("입력해");
alert(promptValue);
console.log(promptValue);