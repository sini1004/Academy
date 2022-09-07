//원시타입 : 값이 복사되어 전달됨

let a = 1;
let b = a;

console.log('변수 a는? ', a);
console.log(b);

console.log("--------------------------------------------------");

//객체타입 : 참조값(메모리주소, 레퍼런스)가 복사되어 전달
let apple = {
    name : '사과',
    color : '빨강',
};

let banana = apple;

console.log('변수 banana는? ', banana);

