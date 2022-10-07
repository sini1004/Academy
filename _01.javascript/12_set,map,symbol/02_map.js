/*
  map : key, value 는 중복 불가
        배열과 달리 순서(index)가 없음, set과 달리 value 중복 가능
        오브젝트와 비슷(키가 있는 데이터를 저장한다는 점에서 객체와 유사)
  new Map() – 맵을 만듭니다.
  map.set(key, value) – key를 이용해 value를 저장합니다.
  map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
  map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
  map.delete(key) – key에 해당하는 값을 삭제합니다.
  map.clear() – 맵 안의 모든 요소를 제거합니다.
  map.size – 요소의 개수를 반환합니다.
*/

const map = new Map([['key1', '🍎'],  ['key2', '🍌']]);  //배열 안에 또다른 배열
console.log('map은?', map);

//사이즈 확인 map.size
console.log('map 아이템의 갯수?', map.size);

//존재하는지 확인(set과 동일), key로 확인 - boolean
console.log('map에 key1이 있냐?',map.has('key1'));
console.log('map에 key6이 있냐?',map.has('key6'));

//순회
map.forEach((value, key) => console.log('값? ', value, key));
map.forEach((aa,bb,cc) => console.log(aa,bb,cc));  //(밸류,키)
console.log('value만', map.values()); //value값만 => Interator 
console.log('key만', map.keys()); //key값만 => Interator 
console.log('value, key', map.entries()); //value,key값  

//찾기
console.log('key1의 value값은?', map.get('key1'));
console.log('key2의 value값은?', map.get('key2'));
console.log('key6의 value값은?', map.get('key6')); // => undefined

//추가
map.set('key3', '🥝');
console.log('키위 추가 ', map);

//삭제
map.delete('key3');
console.log('키위 삭제 ', map);

//전부삭제
map.clear();
console.log('전부 삭제 ', map);
