// The stored API key for the Weather Application
// bd6845ddedcbf1291ba7ad3277418285
// Used in API OpenWeather Map, parameter appid
var APIKey = "bd6845ddedcbf1291ba7ad3277418285";

// The city requested by the user; also counts as the state and/or country code
// Used in API OpenWeather Map, parameter q
var city;

var fetchButton = document.getElementById('fetch-button');

//Fetch


function handleFormSubmit(event) {
  // Removed, didn't work
  // event.preventDefault();

  // grabbing the city input and fetching weather data
  var city = $('input[name="searchText"]').val();

  // Concatenation of URL to the OpenWeather Map API, includes city and APIKey
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  fetch(queryURL)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}
fetchButton.addEventListener('click', handleFormSubmit);