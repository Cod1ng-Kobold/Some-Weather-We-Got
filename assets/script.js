// The stored API key for the Weather Application
// bd6845ddedcbf1291ba7ad3277418285

// This code is designed so that when the 'Enter' key or Submit button is pressed, the form is stopped from submitting, and it grabs the value in the search field.
const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

// AJAX Request code
const apiKey = "bd6845ddedcbf1291ba7ad3277418285";
const inputVal = input.value;

...

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiK
