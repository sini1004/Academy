//배열의 함수들 정리
const fruits = ['🍇','🍎','🍋'];

//특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits)); 
console.log(Array.isArray({}));     //빈오브젝트 전달- false


//특정한 아이템의 위치를 찾을때(인덱스)  - 배열명.indexOf(아이템)
console.log('🍋의 인덱스는?',fruits.indexOf('🍋')); 

//배열안에 특정한 아이템이 있는지 체크
console.log('🍎 있니?',fruits.includes('🍎')); 
console.log('🍍 있니?',fruits.includes('🍍')); 

//아이템 추가
fruits.push('🍑'); //맨 끝에 요소 추가
console.log(fruits);

fruits.push('🍅','🍒'); //여러개 추가도 가능
console.log(fruits); 

fruits.unshift('🍒'); //맨 앞에 요소 추가
console.log(fruits); 

fruits.pop('🍒'); //맨 끝에 요소 제거
console.log(fruits); 

fruits.shift('🍒'); //맨 앞에 요소 제거
console.log(fruits); 
console.log('아이템 갯수는?',fruits.length);

//중간 아이템 추가 또는 삭제 => arr.slice([start], [end]) : 삭제될 갯수가 생략될때는 뒤에 있는거 전부다 삭제
fruits.splice(2, 1);
console.log('', fruits);

fruits.splice(1,1,'🍒'); 
console.log('삭제하고 그 자리에 추가',fruits);


console.log('============================================')


//기존배열에서 새로운 배열을 만듦
let newFr =fruits.slice(1,3);
console.log('새로운 배열 만듦',newFr);
//.slice(시작지점, 마지막지점(몇번째인지))

newFr = fruits.slice(-2); //뒤에서 부터 2개
console.log('-값 이용', newFr);

//여러개의 배열을 붙여줌(합쳐줌)
const arr1 = [1,2,3];
const arr2 = [100,200,300];
const arr3 = arr1.concat(arr2);
console.log('arr1',arr1);
console.log('arr2',arr2);
console.log('arr3',arr3);


//순서를 거꾸로
const arr4 = arr3.reverse(); 
console.log('arr4-순서를 꺼꾸로',arr4);

//특정한 값으로 배열 아이템 채우기
arr4.fill('🌼');
console.log('arr4',arr4);

arr4.fill('🥩',1,3); 
console.log('arr4',arr4);
//fill(채울꺼, 시작인덱스, 끝나는 지점(몇번째냐))

arr4.fill('🍻',3); 
console.log('arr4',arr4);

const arr5 = ['하늘','💐']

//중첩된 배열, 하나의 배열로 쫙 펴기
const arr6 = [['🍻','🥩','🌼'],[1,2,3,4,]]
console.log('중첩된 배열', arr6);
arr7=arr6.flat();

console.log('arr7은?', arr7);
//1단계까지 풀어줌, 배열안에 배열이 또 있을 경우는 숫자(단계)를 넣어준다

//아이템을 특정값으로 채우기
arr7.fill('🌹')
console.log('장미꽃으로 채워주기', arr7);

arr7.fill('a',1,3); //인덱스1부터, 세번째까지
console.log('장미꽃으로 채워주기', arr7);





//https://ko.javascript.info/array-methods