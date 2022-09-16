/*

확장 extends

*/

// class Tiger {
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('냠냠');
//   };
//   sleep(){
//     console.log('쿨쿨');
//   }
// }

// class Dog {
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('냠냠');
//   };
//   sleep(){
//     console.log('쿨쿨');
//   }
//   play(){
//     console.log('놀자~!!!!');
//   }
// }

class Animal {  
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('냠냠');
  }
  sleep(){
    console.log('쿨쿨');
  }
}

class Tiger extends Animal{}   //클라스 Tiger는 클라스Animal을 상속받는다
const tt = new Tiger('노랑까망'); //클라스 Tiger를 이용해서 tt객체 만듦
console.log('tt',tt);
tt.sleep();

class Doggy extends Animal{
  constructor(color, ownerName){ //원래 있던 color도 받아와야함!
    super(color); //상속하고 있는 Animal을 가르킴.
    this.ownerName = ownerName;
  }
  get play(){ //Animal 클래스에 없는거 추가.
    console.log("놀자~!!!!");
  }

  //자식클래스에서 부모 클래스에 있는 함수를 고침
  eat(){
    super.eat();  //부모 클래스의 함수 호출
    console.log('쭈릅');
  }
}
const dd = new Doggy('브라운','수지');
console.log('dd', dd);
dd.play; //접근자 프로퍼티를 사용했기 때문에 ()없이 호출
dd.eat();