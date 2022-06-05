const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  // padStart()는 String에만 사용할 수 있으므로 date.~ 를 문자형으로 변경한다.
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);