/**
삼항조건 연산자 ternary operator
  조건문 ? truthy한 값으로 평가될 경우 실행되는 표현식  :  falsy한 값으로 평가될 경우 실행되는 표현식
 */

let fruit = 'orange';

// if (fruit == 'apple') {
//   console.log('🍎');
// } else {
//   console.log('🥖');
// }

// fruit == 'apple' ? console.log('🍎') : console.log('🍺');

let emoji = fruit == 'apple' ? '🍎' :  '🍣';
console.log(emoji);