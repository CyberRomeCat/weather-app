/* eslint-disable no-bitwise */
/* eslint-disable radix */
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

function modifyString(getTime) {
  const nightTime = [19, 20, 21, 22, 23, 0, 1, 2, 3, 4];
  const replaceStr = getTime.replaceAll(":", " ");
  const splitStr = replaceStr.split(" ");
  const time = parseInt(splitStr[1]);
  const nightTimeTrue = nightTime.includes(time);
  return nightTimeTrue;
}

const changeBgImg = (weather, time) => {
  const bgImg = document.getElementById("bg-image");
  const countryNightTime = modifyString(time);
  if (
    (countryNightTime === true) &
    (weather.includes("Clear") === true || weather.includes("cloudy") === true)
  ) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/night-sky.jpg')";
  } else if (weather.includes("cloudy") === true) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/cloudy.jpg')";
  } else if (weather.includes("Sunny") === true) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/sunny.jpg')";
  } else if (weather.includes("Clear") === true) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/clear-sky.jpeg')";
  } else if (weather.includes("Mist") === true) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/mist.jpg')";
  } else if (weather.includes("Overcast") === true) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/overcast.jpg')";
  } else if (
    weather.includes("rain") === true ||
    weather.includes("drizzle") === true
  ) {
    bgImg.style.backgroundImage = "";
    bgImg.style.backgroundImage = "url('../src/imgs/rain.jpg')";
  }
};

export { changeDisplay, changeBgImg };
