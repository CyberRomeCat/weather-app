import "./style.css";

const getWeatherData = async (userLocation) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=490370ad19b74d52b78123129233011&q=${userLocation}`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
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
