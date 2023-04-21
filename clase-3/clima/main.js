// Config
const API_ENDPOINT = "https://api.open-meteo.com/v1/forecast";

function fetchWeather(latitude, longitude, hourly) {
  document.getElementById("weather").innerHTML = "Loading...";
  fetch(
    `${API_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.hourly.temperature_2m[0];
      console.log(data);
      console.log(temperature);

      document.getElementById("weather").innerHTML = temperature;
    });
}
