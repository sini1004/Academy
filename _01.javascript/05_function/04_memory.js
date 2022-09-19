
/**
함수는 heap에 들어감.

 */

function add(a, b){
  return a + b;
}

const sum = add;
//add가 가르키는 메모리 주소
//sum도 함수처럼 사용

console.log('add함수 실행 : ', add(2, 3));
console.log('sum함수 실행 : ', sum(3, 7));
console.log('add함수 실행 : ', add());
console.log('sum함수 실행 : ', sum());