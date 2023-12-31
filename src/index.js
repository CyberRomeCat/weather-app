import "./style.css";
import changeDisplay from "./UI";

function upperCase(string) {
  const str = string;
  const modStr = str[0].toUpperCase() + str.slice(1);
  return modStr;
}

const getWeatherData = async (userLocation) => {
  const location = upperCase(userLocation);
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=490370ad19b74d52b78123129233011&q=${location}`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    if (
      weatherData.location.name === location ||
      weatherData.location.region === location ||
      weatherData.location.country === location
    ) {
      const error = document.getElementById("error");
      error.style.display = "none";
      changeDisplay.changeLocation(location);
      changeDisplay.temperature(weatherData.current.temp_c);
      changeDisplay.sky(weatherData.current.condition.text);
      changeDisplay.feelsLike(weatherData.current.feelslike_c);
      changeDisplay.humidity(weatherData.current.humidity);
      changeDisplay.wind(weatherData.current.wind_kph);
      changeDisplay.date(weatherData.location.localtime);
      changeDisplay.time(weatherData.location.localtime);
    }
  } catch (err) {
    const error = document.getElementById("error");
    error.style.display = "block";
  }
};

function getUserLocation() {
  const location = document.getElementById("location");
  location.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getWeatherData(location.value);
    }
  });
}

getUserLocation();
