const clock = document.querySelector("#clock");

function count(){
  const date = new Date(); // 현재시간
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour} : ${min} : ${sec}`;
}
count(); //현재 시간이 뜨기까지 로딩 시간 1초를 없애기 위해 함수를 먼저 실행한다.
setInterval(count, 1000);
