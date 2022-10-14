//XMLHttpRequest() : 외부 데이터를 불러들이는 객체
const xhr = new XMLHttpRequest();

xhr.open('get', 'data.html', true); //요청을 준비

xhr.onload = function(){
  //서버 응답이 정상이라면
  if(xhr.status == 200){ //서버 응답이 정상이라면 Http status code (정상:200)
    document.getElementById('content').innerHTML = xhr.responseText;
    //가져온 데이터를 #content에 넣어줌
  }
  
}
xhr.send(null); //요청을 전송