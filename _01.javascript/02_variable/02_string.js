//문자열 타입

/**
  문자열 타입
   - 따옴표 안에 집어넣음 '', "" 
   - 백틱 사용가능 ``
 */

let string = '안녕하세요!';
console.log(string);
string = 'hi';
console.log(string);

//특수문자 출력하는 법
string = '"따옴표"가 보이게';
console.log(string); //따옴표를 출력하고 싶으면 안쪽에 

string = '똑같은 \'홑따옴표\' 쓸래';
console.log(string); 

string = '줄바꿈이 될까요?? \n안녕  탭누룬뒤 \t 안녕 \\백슬래시 두번써보면?';
console.log(string); //이스케이프 시퀀스

/*
  템플릿 리터럴(템플릿 문자열)
  : 내장된 표현실을 허용하는 문자열 표현 방법
    - 따옴표 대신 백틱을 이용, 플레이스 홀더 ${}로 변수를 감싼다.
*/
let id = 'Rain';
let greetings = '안녕하세요. ' + id + '님, \n🙂 즐거운 하루 보내세요!'; //기존 방식

console.log(id);
console.log(greetings);

greetings = `안녕~🙋‍♀️ ${id} 님! 만나서 반가워!`; //es6 방식
console.log(greetings);


console.log(`1 + 1 = ${1 + 1}`);


