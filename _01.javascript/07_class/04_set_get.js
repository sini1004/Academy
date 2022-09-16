/**

접근자 프로퍼티 Accessor property - 변수처럼 보이지만 실제로는 함수

 */


class Student {
  constructor(firstName, lastName) {
    this.aa = firstName;
    this.bb = lastName;
  }
  fullName(){
    return `${this.bb} ${this.aa}`
  }
}

const member1 = new Student('지현', '전');

console.log(member1.aa);
console.log(member1.bb);
console.log(member1.fullName);
console.log(member1.fullName()); //함수형식으로 호출 : fullName() 
console.log("=============================");

// 함수형식으로 호출 -> 프로퍼티처럼 하고 싶음 -> 프로퍼티 형식으로

class Student1 {
  constructor(firstName, lastName) {
    this.aa = firstName;
    this.bb = lastName;
    // this.fullName = `${this.bb} ${this.aa}` =>인자 변경 시 업데이트가 안됨.
  }
  get fullName(){
    return `${this.bb} ${this.aa}`
  }

  set fullName(value){
    console.log('set추가 : ', value);
  }
}

const member2 = new Student1('지현', '김');
console.log(member2.fullName); 

member2.aa = '수지';
console.log(member2.fullName);

member2.fullName = '강 동원'; //set 호출
console.log(member2.fullName);



