/**
내장객체 (build-in Object)

래퍼 객체(wrapper Object)
  - 원시값 (number, string, boolean)을 관련된 내장객체로 변환
 */
const nn =  1234;  //number 원시타입

console.log(nn); //할당한 값 1234가 그냥 출력(원시타입)

console.log(nn.toString()); //숫자를 문자열로
//nn 뒤에 .을 찍어보면 사용할 수 있는 매서드가 뜬다.
//number 원시타입을 감싸고 있는 Number 객체로 감싸지는것


const tt = '         글씨        ';  //string (문자열, 원시타입)
console.log(tt);
console.log(tt.length);

const text = '        ddddd';
console.log(text.length); //문자갯수를 알아오는 프로퍼티
console.log(text.trim()); //여백을 없애주는 매서드