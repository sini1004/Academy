/**

  객체지향 프로그래밍   
    1) 생성자함수(고전적 방식)
    2) 클래스 - 객체를 생성할 수 있는 템플릿

 */

class Fruit { 
  constructor(na, co, dis){
    this.name = na;
    this.color = co;
    this.emoji = dis;
  }
  display = () => { //this필요X
    console.log(`${this.name}:${this.emoji}`);
  }
}

const cherry = new Fruit ('체리', 'red', '🍒');
const grape = new Fruit ('포도', 'purple', '🍇');
//항상 new를 붙여서 실행, 정해진 템플릿을 이용해서 원하는 데이터만 전달

console.log(cherry);
console.log(grape);
cherry.display();
grape.display(); 

