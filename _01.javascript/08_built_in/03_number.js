/**

Number 원시 래퍼 객체

 */

const num1 = 123;
const num2 = new Number(123); //객체 만듦, 메모리 낭비

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);