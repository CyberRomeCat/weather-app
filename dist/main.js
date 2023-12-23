/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const getWeatherData = async (userLocation) => {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/current.json?key=490370ad19b74d52b78123129233011&q=${userLocation}`,\n    { mode: \"cors\" },\n  );\n  const weatherData = await response.json();\n\n  console.log(weatherData);\n};\n\nfunction getUserLocation() {\n  const location = document.getElementById(\"location\");\n  location.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"enter\" || e.keyCode === 13) {\n      e.preventDefault();\n      getWeatherData(location.value);\n    }\n  });\n}\n\ngetUserLocation();\n\n\n//# sourceURL=webpack://project-setup-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;