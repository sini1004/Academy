/*
  JSON
    : 자바스크립트에서 사용되는 객체를 서버와 주고받기 편한 문자열 파일
    : 오브젝트 형태의 텍스트 포맷

  JSON.stringify – 객체를 JSON으로 바꿔줍니다.
  JSON.parse – JSON을 객체로 바꿔줍니다.
*/

const nuri = {
  name : 'nuri',
  age : 3,
  type : 'cat',
  eat : () => { console.log('냠냠') }
}

console.log('오브젝트 ', nuri);

const jj = JSON.stringify(nuri);
console.log('객체를 JSON으로 변경 ', jj);
// json형태의 문자열로 변환 (serializing 한다)
// 함수는 포함되지 않음 / 객체의 프로퍼티만

const obj = JSON.parse(jj);
console.log('JSON을 다시 객체로 변경 ', obj);