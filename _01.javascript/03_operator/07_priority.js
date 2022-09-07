/**
연산자 우선순위 (priority)

 */

let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); //14

result = (a + b) * 4; //()부터 먼저 계산
console.log(result); //20

result = a++ + b + 4; //연산을 끝낸 뒤 ++로 추가해줌.
console.log(result); //9
console.log(a); //3

result = a++ + b - 4;
console.log(result); //2 (a:3  3+3-4 = 2)
console.log(a); //4

result = a++ + b * 4;
console.log(result);    //16 (a:4  4+((3*4) = 16)
console.log(a); //5




