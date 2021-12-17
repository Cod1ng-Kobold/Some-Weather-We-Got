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


const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city :(";
  });


  // list item component!
  const { main, name, sys, weather } = data;
const icon = `https://openweathermap.org/img/wn/${
  weather[0]["icon"]
}@2x.png`;

const li = document.createElement("li");
li.classList.add("city");
const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;

// Resets the search bar
li.innerHTML = markup;
list.appendChild(li);

msg.textContent = "";
form.reset();
input.focus();
