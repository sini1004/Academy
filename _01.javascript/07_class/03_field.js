/*

비공개로 사용, 접근제어자 - 캡슐화(외부에서 수정 못하게)
private / public(기본)

*/

class Fruit { 
  #name;
  #type = '과일';

  constructor(na, co, dis){
    this.#name = na;
    this.color = co;
    this.emoji = dis;
  }
  display = () => { //this필요X
    console.log(`${this.#name}:${this.emoji}`);
  }
}

const cherry = new Fruit('cherry', 'red', '🍒');
console.log(cherry);
console.log(cherry.type); //undefined -가져올 수 없음
cherry.display();
