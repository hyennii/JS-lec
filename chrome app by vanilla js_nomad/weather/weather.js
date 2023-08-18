const aaa = function () {
  const API_KEY = "255ba3708262eba0bd055c04a98c9142";

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
  }
  function onGeoError() {
    alert("못찾음");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
};

const www = function () {
  aaa();
};
