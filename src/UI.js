/* eslint-disable prefer-destructuring */
const changeDisplay = (() => {
  const changeLocation = (region) => {
    const city = document.getElementById("city-name");
    city.textContent = "";
    city.textContent = region;
  };

  const date = (currentDate) => {
    const getDate = document.getElementById("date");
    const replaceStr = currentDate.replaceAll("-", " ");
    const str = replaceStr.split(" ");
    getDate.textContent = `${str[1]}/${str[2]}/${str[0]}`;
  };

  const time = (currentTime) => {
    const getTime = document.getElementById("time");
    const replaceStr = currentTime.replaceAll("-", " ");
    const str = replaceStr.split(" ");
    getTime.textContent = str[3];
  };

  const temperature = (currentTemp) => {
    const getTemp = document.getElementById("temperature");
    const roundTemp = Math.round(currentTemp);
    getTemp.textContent = `${roundTemp}°C`;
  };

  const sky = (currentSky) => {
    const getSky = document.getElementById("sky");
    getSky.textContent = currentSky;
  };

  const feelsLike = (currentTemp) => {
    const getFeelsLike = document.getElementById("feels-like");
    const roundTemp = Math.round(currentTemp);
    getFeelsLike.textContent = `Feels like: ${roundTemp}°C`;
  };

  const humidity = (currentHumidity) => {
    const getHumidity = document.getElementById("humidity");
    getHumidity.textContent = `Humidity: ${currentHumidity}%`;
  };

  const wind = (currentWind) => {
    const getWind = document.getElementById("wind");
    const roundWind = Math.round(currentWind);
    getWind.textContent = `Wind: ${roundWind}km/hr`;
  };

  return {
    changeLocation,
    date,
    time,
    temperature,
    sky,
    feelsLike,
    humidity,
    wind,
  };
})();

export default changeDisplay;
