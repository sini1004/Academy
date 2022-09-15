/**

생성자 함수(constructor  function) 객체를 만드는 역할을 하는 함수

 */


/**
let apple = {
  name : '사과',
  color : 'green',
  display : function(){
    console.log(`${this.name}:🍏`)
  }
}


let banana = {
  name : '바나나',
  color : 'yellow',
  display : function(){
    console.log(`${this.name}:🍌`)
  }
}


let cherry = {
  name : '체리',
  color : 'red',
  display : function(){
    console.log(`${this.name}:🍒`)
  }
}

*/

// 생성자 함수 템플릿
function Fruit(na, co, dis) { //함수명은 대문자로 시작
  this.name = na;
  this.color = co;
  this.emoji = dis
  this.display = function(){
    console.log(`${this.name}:${this.emoji}`);
  }
  return this; //생략 가능, 생성자 함수에서는 자동으로 리턴
}

const cherry = new Fruit ('체리', 'red', '🍒');
const grape = new Fruit ('포도', 'purple', '🍇');
//항상 new를 붙여서 실행, 정해진 템플릿을 이용해서 원하는 데이터만 전달

console.log(cherry);
console.log(grape);
cherry.display();
grape.display();


// 참고 : https://dasima.xyz/javascript-constructor-function-object/