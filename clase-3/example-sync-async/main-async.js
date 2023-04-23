function printAfterSomeTime() {
  setTimeout(() => console.log("Step 2 - printAfterSomeTime"), 2000);
}

function getWeather() {
  // Config
  const API_ENDPOINT = "https://api.open-meteo.com/v1/forecast";

  const latitude = -37.32;
  const longitude = -59.13;
  const hourly = "temperature_2m";

  fetch(
    `${API_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// function getWeather() {
//   // Config
//   const API_ENDPOINT = "https://api.open-meteo.com/v1/forecast";

//   const latitude = -37.32;
//   const longitude = -59.13;
//   const hourly = "temperature_2m";

//   return fetch(
//     `${API_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`
//   ).then((response) => response.json());
// }

async function execute() {
  console.log("Step 1");

  // printAfterSomeTime();

  const weather = await getWeather();

  console.log("Step 2 - weather", weather);

  const temperature = weather.hourly.temperature_2m[0];

  document.getElementById(
    "weather"
  ).innerHTML = `El clima es ${temperature} grados`;

  console.log("Step 3");
}
