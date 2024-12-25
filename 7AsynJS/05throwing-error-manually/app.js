"use strict";

const countriesContainer = document.querySelector(".countries");
const button = document.querySelector(".btn-country");

const renderCountryData = function (data, className = "") {
  // Handle undefined languages and currencies safely
  const language = data.languages ? Object.values(data.languages)[0] : "N/A";
  const currency = data.currencies ? Object.values(data.currencies)[0].name : "N/A";

  const html = `
         <article class="country ${className}">
           <img class="country__img" src="${data.flags.svg}" />
             <div class="country__data">
                 <h3 class="country__name">${data.name.common}</h3>
                 <h4 class="country__region">${data.region}</h4>
                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
                 <p class="country__row"><span>🗣️</span>${language}</p>
                 <p class="country__row"><span>💰</span>${currency}</p>
             </div>
         </article>
     `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, msg = "Something Went Wrong") {
  return fetch(url).then((response) => {
    console.log(response);

    if (!response.ok) throw new Error("Could Not Found Country");

    return response.json();
  });
};

// using promises

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Could not find country")
    .then((data) => {
      renderCountryData(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : null;

      if (!neighbour) throw new Error("No Neighbour Found");

      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Could not find country");
    })
    .then((data) => renderCountryData(data[0], "neighbour"))
    .catch((err) => {
      renderError(`Something Went Wrong 💥💥💥 ${err.message}. Try Again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

button.addEventListener("click", function () {
  getCountryData("japan");
});
