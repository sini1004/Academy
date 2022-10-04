//배열안의 특정 아이템을 교체해서 새로운 배열 만들기 (사과->바나나)

/*
//재사용성이 떨어짐
function replace(aa){
  const replaced = Array.from(aa);
  console.log('relaced배열은? ', replaced);
  for(let i = 0; i < replaced.length; i++){
    //console.log(replaced[i]);
    if(replaced[i] == '🍎'){
      replaced[i] = '🍌';
    }
  }
  return replaced;
}

const aa = ['🍊','🍎','🍇','🍈','🍎'];
const result = replace(aa);
console.log(result);
*/

function replace(aa, from, end){
  const replaced = Array.from(aa);
  console.log('relaced배열은? ', replaced);
  for(let i = 0; i < replaced.length; i++){
    if(replaced[i] == from){
      replaced[i] = end;
    }
  }
  return replaced;
}

const aa = ['🍊','🍎','🍇','🍈','🍎'];
const result = replace(aa,'🍇', '🫐');
console.log(result);

/*
  2. 배열안에 특정한 요소가 몇개 있는지 알아오기
*/
function count(bb, item){
  let counter = 0;
  for(let i = 0; i < bb.length; i++){
    if(bb[i] == item){
      counter++;
    }
  }
  return counter;
}
const bb = ['🍟','🥞','🍗','🥞','🍞','🥞','🥨','🍗'];
console.log(count(bb, '🍗'));


/*
  3. 배열 2개에서 겹치는 아이템만으로 새로운 배열
  배열1 - ['🍗','🍎','🍌','🍇','🍈','🍎']
  배열2 - ['🍎','🍇','🍎','🥞']
  결과값 배열 ['🍎','🍇']
 */
function match(aa,bb){
  const resuult = [];
  for(let i = 0; i < aa.length; i++){
    if(bb.includes(aa[i])){ //하나씩 비교하며 동일한게 있는지 체크
      //console.log('있음!');
      result.push(aa[i]);
    }
  }
  return result;
}

console.log(match(['🍗','🍎','🍌','🍇','🍈','🍎'],['🍎','🍇','🍎','🥞']));