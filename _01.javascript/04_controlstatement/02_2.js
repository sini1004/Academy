/**
num의 숫자가 짝수이면 👍🏻, 홀수이면 👎🏻
 */

let num = 5;

// if( num % 2 === 0){
//   console.log('짝수입니다! 👍🏻');
// } else{
//   console.log('홀수입니다! 👎🏻');
// }

//num = num % 2  === 0 ? console.log('짝수입니다! 👍🏻') : console.log('홀수입니다! 👎🏻');


let number = num % 2 === 0 ? '짝수입니다.' : '홀수입니다';
console.log(number);