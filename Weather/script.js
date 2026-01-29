const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await res.json();

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    console.log(data);

    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/cloudy.png";
    } else if ((data.weather[0].main = "Clear")) {
      weatherIcon.src = "assets/sunny.png";
    } else if ((data.weather[0].main = "Rain")) {
      weatherIcon.src = "assets/rain.png";
    } else if ((data.weather[0].main = "Drizzle")) {
      weatherIcon.src = "assets/drizzle.png";
    } else if ((data.weather[0].main = "Mist")) {
      weatherIcon.src = "assets/mist.png";
    } else if ((data.weather[0].main = "Snow")) {
      weatherIcon.src = "assets/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
