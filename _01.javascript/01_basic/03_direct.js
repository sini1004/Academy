let a = '수박';
console.log(a);

let b = 3500;
console.log(b);

// 변수

/**
    1. 원시타입(단일 데이터, primitive) - number, string, boolean
    2. 객체(복합데이터, object) - 함수, 배열, ... 원시를 제외한 모든 것
 */

/*
    변수 이름을 만들때는
    1. 영어(대, 소문자 구분), 숫자, 특수문자 _$
    2. 의미있는 단어로 구체적으로!
    3. 카멜케이스 camelCase (뒷단어 첫 대문자)
        파스칼 표기법 PascalCase (단어들 다 첫 대문자)
        언더바 표기법 under_bar (언더바 _로 두 단어 이어줌)
    4. 예약어 X
    5. 숫자로 시작 X
*/

let c; // 변수 선언
c = '샤인머스켓'; // 변수 c에 대입한다(집어넣는다)
console.log(c);

let d = '우유'; // 선언과 대입을 동시에
console.log(c, d);


for (let i = 0; i<5; i++){
    for (let j=0; j<=i; j++){
        document.write('*');
    }
    document.write('<br/>');
}








