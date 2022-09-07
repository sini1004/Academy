let vari;

console.log(typeof vari); //undefined : 자바스크립트는 할당된 값에 따라 타입 결정

vari = 100;
console.log(typeof vari);

vari = '100';  //따옴표 안에 문자나, 숫자를 넣으면 문자열로 인식  => string
console.log(typeof vari);

vari = function(){};  //function(함수)로 인식

console.log(typeof vari);

console.log(typeof '123');

/*
c언어 같은 경우는 
Int 변수명 = ''; 선언할 때 정의해야 함. 자바스크립트는 동적, 타입이 변경
*/