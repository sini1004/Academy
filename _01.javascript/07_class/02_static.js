/**

  static, 정적 프로퍼티, 메서드
  
  재사용성을 높이는 방법

  클래스에 한번만 만들어 지고 각 인스턴스에는 들어있지 않음.

 */


//클래스 
class Fruit {
  static taste = '맛있어!🤗'; //고정된 프로퍼티 만듦

  constructor(na, co, dis){
    this.name = na;
    this.color = co;
    this.emoji = dis;
  }

  //class 레벨의 메서드 (고정되있음)
  static maden(){
    return new Fruit('banana','yellow', '🍌');
  }

  //인스턴스 레벨의 메서드
  display = () => { //this필요X
    console.log(`${this.name}:${this.emoji}`);
  }
}

const aaa = Fruit.maden();
console.log(aaa);
console.log(Fruit.taste);
