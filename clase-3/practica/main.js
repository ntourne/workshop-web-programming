// Config
const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=11c6235831bfcf4e28ee2f286f7ef58e`;

// Make a request to API
function searchMovies(query) {
  return fetch(API_ENDPOINT + "&query=" + query).then((response) =>
    response.json()
  );
}

// Handle the submit form action
// Make a request to API and render results
function submitForm() {
  // Get query value
  const query = document.getElementById("query").value;

  // Execute API request
  searchMovies(query)
    .then((data) => {
      // Process results from API
      if (data && data.results) {
        // Iterate list of movies and render each of them
        data.results.forEach((movie) => {
          renderMovie(movie.original_title, movie.overview);
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// Render a movie in the page
function renderMovie(title, overview) {
  const moviesDiv = document.getElementById("movies-list");
  const html = `
    <div class="movie-box">
      <div class="details">
        <div class="title">${title}</div>
        <div class="overview">${overview}</div>
      </div>
    </div>
  `;
  moviesDiv.insertAdjacentHTML("afterend", html);
}
