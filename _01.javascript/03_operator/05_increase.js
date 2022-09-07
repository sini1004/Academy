/**
증감연산자 Increment & Decrement Operator
 */

let a = 0;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

// a++ 필요한 연산을 먼저하고, 그 뒤에 값을 증가시킴
let b = 0;
let c = b++; //b를 c에 할당시키고 ++추가
console.log('변수 c는? ', c); //0
console.log('변수 b는? ', b); //1 나중에 연산


let d = '오늘부터';
d += '우리는';

console.log(d);