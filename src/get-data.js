// eslint-disable-next-line import/no-cycle
import { upperCase } from "./index";
import { changeDisplay, changeBgImg } from "./UI";

const getWeatherData = async (location) => {
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
      changeBgImg(
        weatherData.current.condition.text,
        weatherData.location.localtime,
      );
      changeDisplay.feelsLike(weatherData.current.feelslike_c);
      changeDisplay.humidity(weatherData.current.humidity);
      changeDisplay.wind(weatherData.current.wind_kph);
      changeDisplay.date(weatherData.location.localtime);
      changeDisplay.time(weatherData.location.localtime);
      console.log(weatherData.location.localtime);
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
      getWeatherData(upperCase(location.value));
    }
  });
}

export { getUserLocation, getWeatherData };
