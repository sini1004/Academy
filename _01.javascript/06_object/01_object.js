/**
객체 Object - 복합데이터
-- 속성(propery) : 객체내의 변수
-- 메서드(method) : 객체의 일부로 선언된 함수(작업 명령어)

만드는 법
1. object literal { key(키) : value(값/속성명)} //'객체 리터럴'문법
2. new Object() - Object클라스 이용 //'객체 생성자'문법
3. Object.create() - Object 클라스 안의 create함수 이용

key - 문자, 숫자, 심볼 ...
value - 원시값(문자, 숫자 ...), 객체(함수)

*/

let apple = {
  name : '사과',
  display : '🍎',
  price : 1000,
  'apple-color' : 'red',
}

console.log(apple);
console.log(apple.display);
console.log(apple['apple-color']); //문자열은 생략 후 대괄호로(배열의 아이템처럼)

//apple-color : 특수문자를 쓸 수 없음! but 문자열의 형태로 가능

//apple.display         - 마침표 표기법 dot notation
//apple['apple-color']  - 대괄호 표기법 bracket notation


let banana = {
  name : '바나나',
  // display : '🍌',
  price : 1000,
  'banana-color' : 'yellow',
  display : function(){
    console.log(`${banana.name}:🍌`)
  }
}

banana.display();