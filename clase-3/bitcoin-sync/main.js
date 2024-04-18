// Handle the submit form action
function handleSubmit(e) {
  e.preventDefault();

  // Get BTC value from the form
  const btcValue = document.getElementById("btcValue").value;

  // Call function to convert from BTC to USD
  const usdValue = fromBtcToUsd(btcValue);

  // Render the result in the UI
  document.getElementById("output").textContent = `USD: ${usdValue}`;
}

// Convert from BTC to USD
const fromBtcToUsd = (btcValue) => {
  const BTC_USD_VALUE = 60000;

  return btcValue * BTC_USD_VALUE;
};
