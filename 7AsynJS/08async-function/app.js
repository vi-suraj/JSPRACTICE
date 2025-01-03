"use strict";

const countriesContainer = document.querySelector(".countries");

const renderCountryData = function (data, className = "") {
  // Handle undefined languages and currencies safely
  const language = data.languages ? Object.values(data.languages)[0] : "N/A";
  const currency = data.currencies ? Object.values(data.currencies)[0].name : "N/A";

  const html = `
           <article class="country">
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
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    renderCountryData(data[0]);
  } catch (error) {
    console.error(error);
    renderCountryData(`Something Went Wrong ${error.message}`);
  }
};

whereAmI("spain");
whereAmI("spain");
whereAmI("spain");
console.log("Hello");
