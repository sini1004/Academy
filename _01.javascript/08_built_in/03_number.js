/**

Number 원시 래퍼 객체

 */

const num1 = 123;
const num2 = new Number(123); //객체 만듦, 메모리 낭비

console.log(num1);
console.log(num2);
console.log(typeof num1); //number
console.log(typeof num2); //object

console.log('사용할 수 있는 가장 큰 값', Number.MAX_VALUE);
// Number.MAX_VALUE : 정수에서 사용할 수 있는 가장 큰 숫자 
// e+308 10의 308승
console.log('사용할 수 있는 가장 작은 값', Number.MIN_VALUE);
// Number.MIN_VALUE : 가장 작은 숫자

console.log('안전하게 사용할 수 있는 가장 작은 값', Number.MIN_SAFE_INTEGER);
console.log('안전하게 사용할 수 있는 가장 큰 값', Number.MAX_SAFE_INTEGER);

const num3 = 1234.12;
const num4 = 1234.56578;
console.log('', num3); //숫자
console.log('문자열로 반환 : ', num3.toString());
console.log('실수를 반올림하여 문자열로 변환 : ', num3.toFixed()); 
console.log('실수를 반올림하여 문자열로 변환 : ', num4.toFixed()); 
console.log('', num3.toLocaleString('ko-KR'));
console.log('이집트 : ', num3.toLocaleString('ar-EG')); //각국의 언어로 표현

console.log('================================================');
console.log('원하는 자릿수까지 유효하도록 반올림 : ', num4.toPrecision(7));
