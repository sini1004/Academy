/**
단항 연산자 Unary operator
+(양) / -(음) / !(부정)
 */

let a = 5;
a = -a; //-1*5
console.log(a);

a = -a;
console.log(a);

a = +a;
console.log(a);  //5

let bool = true;
console.log(bool);
console.log(!bool); //false
console.log(!!bool); //true

console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+''); //0

console.log(+'adb'); //NaN
console.log(+undefined); //NaN

console.log(!1); //false
console.log(!!1); //값을 boolean타입으로 변환

