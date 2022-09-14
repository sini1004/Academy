/**
콜백함수

일급객체(first-class Object)
일급함수(first-class Function)
  - 일반 객체처럼 모든 연산이 가능
  - 함수의 매개변수로 전달

 */

const add = (a, b) => a + b;
const multifly = (a, b) => a * b;

function calc(c, d, act) {
  result = act (c, d)
  console.log('함수 calc 결과물 : ', result);
}

calc(2, 5, add);

// act - 콜백함수 (나중에 호출해줘!)
// 함수를 바로 호출해서 반환된 값이 전달되는 것이 아니라 나중에 필요한 순간에 호출