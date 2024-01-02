/* eslint-disable import/prefer-default-export */
import "./style.css";
// eslint-disable-next-line import/no-cycle
import { getUserLocation, getWeatherData } from "./get-data";

function upperCase(string) {
  const str = string;
  const modStr = str[0].toUpperCase() + str.slice(1);
  return modStr;
}

getUserLocation();
getWeatherData(upperCase("manila"));

export { upperCase };
