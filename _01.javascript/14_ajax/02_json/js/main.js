const xhr = new XMLHttpRequest();
//XMLHttpRequest() - 외부 데이터를 불러들이는 객체

xhr.open('get','data.json',true);   //요청을 준비하다
xhr.send(null);	       //요청을 전송한다

xhr.onload = function(){
  
   if(xhr.status == 200){ //서버 응답이 정상이라면 (Http status code) 
    respObj = JSON.parse(xhr.responseText);

    let newContent = '';
    for(let i = 0; i < respObj.events.length; i++){
      newContent += `<div class="event">`;
      newContent += `<img src= ${respObj.events[i].map} alt="califonia">`;
      newContent += `<p><strong>${respObj.events[i].location}</strong><br> ${respObj.events[i].date}</p>`;
      newContent += `</div>`;
    }
    console.log(newContent);
    document.getElementById('content').innerHTML = newContent;
  }

}  




