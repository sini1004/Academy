//let : 재할당 가능

let a = 3;
a = 5;

/*const : 재할당 불가능
1. 상수
2. 상수 변수 (constant variable)
*/

const hello = '안녕~  🌞';
//hello = '잘가~';   => error


const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
}
//변수 전체를 할당하는 것이 아니라 속성중 하나만 재할당 하는 것은 가능

console.log(apple);

apple.name = 'orange';
console.log(apple);






