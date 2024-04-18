// Handle the submit form action
function handleSubmit(e) {
  e.preventDefault();

  // Get BTC value from the form
  const btcValue = document.getElementById("btcValue").value;

  // Call function to convert from BTC to USD
  const btcUsdValue = getBTCPriceWithPromise();

  console.log(btcUsdValue);

  const usdValue = btcValue * btcUsdValue;

  // Render the result in the UI
  document.getElementById("output").textContent = `USD: ${usdValue}`;
}

// Call to API to convert BTC to USD
function getBTCPrice() {
  // Define the API URL
  const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";

  const btcPrice = fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON data from the response
        return response.json();
      } else {
        // If the request was not successful, reject the Promise with an error
        return 0;
      }
    })
    .then((data) => {
      // Get the Bitcoin price in USD from the data
      return data.bpi.USD.rate_float;
    })
    .catch((error) => {
      // If there was an error during the request, reject the Promise with the error
      return 0;
    });

  console.log(btcPrice);
  return btcPrice;
}

// Call to API to convert BTC to USD
function getBTCPriceWithPromise() {
  // Define the API URL
  const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        // Check if the request was successful
        if (response.ok) {
          // Parse the JSON data from the response
          return response.json();
        } else {
          // If the request was not successful, reject the Promise with an error
          reject(new Error("Failed to fetch Bitcoin price"));
        }
      })
      .then((data) => {
        // Get the Bitcoin price in USD from the data
        const rateFloat = data.bpi.USD.rate_float;
        resolve(rateFloat);
      })
      .catch((error) => {
        // If there was an error during the request, reject the Promise with the error
        reject(error);
      });
  });
}
