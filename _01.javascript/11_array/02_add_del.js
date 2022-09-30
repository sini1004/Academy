const food = ['🍟','🍕', '🍞', '🍿', '🥐', '🍔', '🥞']

//배열 아이템을 참조하는(선택) 방법
console.log(food[5]);
console.log(food[3]);

console.log('food 길이? ', food.length);

for(let i=0; i<food.length; i++){
  console.log(food[i]);
}


//item 추가, 삭제, 수정
//인덱스로 접근하면 좋지 않음. 그 자리가 빈 자리로 남아있음!
//배열의 메서드를 사용하여 추가 제거 등을 할 수 있음.
//const food1 = ['🍕', '🍔','🍟','🥨']; 
const food1 = ['🍕', '🍔','🍟','🥨'];

food1[6] = '🍗'; // 차례대로 들어가는게 아니라 중간에 빈 아이템이 있는 상태로 추가
console.log('닭다리 추가', food1);  
food1[food1.length] = '🍞';
console.log('마지막에 추가', food1);   // 확실하게 마지막에 추가하고 싶을 때

food1[2] = '🥚';
console.log('바꿔치기', food1);

delete food1[1]; // 2번째 아이템 없애기
console.log('햄버거 없애기', food1); 