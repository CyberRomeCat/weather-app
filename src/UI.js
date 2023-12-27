const changeDisplay = (() => {
  const changeLocation = (region) => {
    const city = document.getElementById("city-name");
    city.textContent = "";
    city.textContent = region;
  };

  return {
    changeLocation,
  };
})();

export default changeDisplay;
