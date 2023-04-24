function getWeather(lat, lng) {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`
  ).then((response) => response.json());
}

function renderWeather(weatherPromise) {
  document.getElementById("weather").innerHTML = "Loading...";
  weatherPromise
    .then((data) => {
      const temperature = data.hourly.temperature_2m[0];
      document.getElementById("weather").innerHTML = `${temperature} grados`;
      console.log("Step 2 - renderWeather - data", data);
    })
    .catch((err) => {
      console.log("error", err);
      document.getElementById("weather").innerHTML = "Error obteniendo clima";
    });
}

function execute() {
  console.log("Step 1");

  const weatherPromise = getWeather(52.52, 13.41);
  renderWeather(weatherPromise);

  //  !await => weather is a Promise
  //  await => weather is a the data

  console.log("Step 3");

  //...
}
