/**

축약형

*/

const x = 0;
const y = 0;

const ccc = {
  x : x,
  y : y,
}
// == 키 이름과 참조하고 있는 변수의 이름이 같으면 생략 가능

const ccc1 = {
  x,
  y,
}
console.log(ccc);
console.log(ccc1);



ddd = (name, age) => {
  return{
    // name : name, //키와 밸류 이름이 같을 때
    // age : age,
    name,
    age,
  };
}

const name = '병아리';
const age = '2';

console.log(ddd('누리', '5'));