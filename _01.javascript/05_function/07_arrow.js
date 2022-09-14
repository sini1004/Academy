/*
표현식 (expression)

익명함수, 함수 표현식 - 함수 이름이 없는 함수, 변수를 함수처럼 사용, 함수도 객체이기 때문에 가능
변수명 =  function(){
    자바스크립트 코드들...
  }
  변수명(); //위에서 정의한 함수 실행(호출)

*/

let add = function(){
  return a+b;
}
console.log('add함수 실행', add(1, 2));


//화살표 함수 const name = () => { }
let add2 = (a, b) => {
  return a+b;
}
console.log('add2함수 실행', add2(1, 3));

let add3 = (a, b) => a + b;