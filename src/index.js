import "./style.css";
import changeDisplay from "./UI";

const getWeatherData = async (userLocation) => {
  const str = userLocation;
  const modStr = str[0].toUpperCase() + str.slice(1);
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=490370ad19b74d52b78123129233011&q=${modStr}`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  if (
    weatherData.location.name === modStr ||
    weatherData.location.region === modStr ||
    weatherData.location.country === modStr
  ) {
    changeDisplay.changeLocation(modStr);
  }
  console.log(weatherData);
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
