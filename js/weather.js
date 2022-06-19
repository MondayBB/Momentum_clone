
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:first-child"); 
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name; 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 이걸 부르면 브라우저에서 위치 좌표를 준다. wifi, 위치, gps 등

import API_KEY from "./weatherAPI.js";
