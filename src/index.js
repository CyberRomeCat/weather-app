/* eslint-disable import/prefer-default-export */
import "./style.css";
import { getUserLocation, getWeatherData } from "./get-data";
// eslint-disable-next-line import/no-cycle

function upperCase(string) {
  const str = string;
  const modStr = str[0].toUpperCase() + str.slice(1);
  return modStr;
}

getUserLocation();
getWeatherData(upperCase("manila"));

export { upperCase };
