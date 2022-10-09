const API_KEY = "812f28ad378328b457b5ea2318e2db07";
const weatherContainer = document.querySelector("#weather");

function responseSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.weather[0].icon}`);
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const weatherRow = document.querySelector("#weather li:first-child");
      const temp = document.querySelector("#weather li:first-child span");
      const city = document.querySelector("#weather li:last-child span");
      weatherRow.appendChild(weatherIcon);
      temp.innerText = `${Math.ceil(data.main.temp)}°C`;
      city.innerText = data.name;
    });
}
function responseFail() {
  console.log(`Sorry! response is fail.`);
}

navigator.geolocation.getCurrentPosition(responseSuccess, responseFail);



