/* 불리언 타입 */

let aa = true; //문자지만 따옴표를 쓰지 않으면 불리언

console.log(aa);
console.log(!aa);

console.log("-------------------------------------------------");
console.log(0);
console.log(!0); //true
console.log(!!0); //false

console.log("-------------------------------------------------");
console.log('');
console.log(!''); //true
console.log(!!''); //false

console.log("-------------------------------------------------");
console.log(null); //아무것도 없음(정의도 안되있음)
console.log(!null); //true 
console.log(!!null); //false 
let bb;
console.log('변수 bb는?', bb); //undefined (아직 정의되지 않음, 비어있는 값이다.)

console.log("-------------------------------------------------");
console.log(Infinity); //끝없이 반복되는 수
console.log(!!Infinity); //true

console.log("-------------------------------------------------");
console.log(3 < 2); //false
console.log(3 == 2); //false
console.log(3 > 2); //true

console.log("-------------------------------------------------");



