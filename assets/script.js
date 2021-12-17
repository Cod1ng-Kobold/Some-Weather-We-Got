// The stored API key for the Weather Application
// bd6845ddedcbf1291ba7ad3277418285
// Used in API OpenWeather Map, parameter appid
var APIKey = "bd6845ddedcbf1291ba7ad3277418285";

// The city requested by the user; also counts as the state and/or country code
// Used in API OpenWeather Map, parameter q
var city;

// Concatenation of URL to the OpenWeather Map API, includes city and APIKey
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//Fetch
fetch(queryURL)