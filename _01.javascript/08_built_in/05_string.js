/**

문자열

 */

const textObject = new String('String 객체로 만들었어요.'); //객체로

const ttt = '원시타입이에요. (객체생성X)'; //원시타입으로
const ttt1 = 'Hello Korea!'; //원시타입으로

console.log(textObject);
console.log(ttt); 
console.log('ttt1의 문자 수는?', ttt1.length);  //.을 찍으면 사용가능한 모든 프로퍼티와 메서드를 살펴볼 수 있다.
console.log('ttt1의 문자 수는?', ttt1[0], ttt1[1], ttt1[2], ttt1[3]);  //배열처럼 인덱스를 이용해서 몇번째 문자인지 알아올 수 있다.
console.log('첫번째 문자 : ', ttt.charAt(0)); //Object 방식으로 첫번째 문자 알아오기

console.log('K는 몇번째 있는 문자?', ttt1.indexOf('K'));
console.log('i는 몇번째 있는 문자?', ttt1.indexOf('i')); //없는 문자를 찾을 때는 -1 출력.
console.log('o는 뒤에서부터 몇번째 있는 문자?', ttt1.lastIndexOf('o')); //문자를 뒤집어서 셈.

console.log('', ttt1.includes('ko'));
console.log('', ttt1.includes('Ko'));
console.log('', ttt1.includes('llo Ko'));
console.log('특정문자 h로 시작하는지 안하는지(블린)', ttt1.startsWith('H'));
console.log('특정문자 !로 끝나는지(블린)', ttt1.endsWith('!'));

console.log('2개 문자 자르고 나머지 출력 : ', ttt1.slice(2)); //llo Korea!
console.log('뒤에서 2개 문자 잘라 가져옴 : ', ttt1.slice(-2)); //a!


const aa = '       space         '
console.log(aa);
console.log(aa.trim());

const longTxt = 'Fly to the moon';
console.log('스페이스를 기준으로 문자열을 끊어준다',longTxt.split(' '));
console.log('스페이스를 기준으로 문자열을 끊어주고, 2개만가져옴',longTxt.split(' ',2));



