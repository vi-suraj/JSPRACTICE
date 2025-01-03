"use strict";

// async function keep running in the background while executing the inside code when function is done it automatically returns promise

// inside async function we can have 1 or more await function

// await will stop execution at this point until the promise if fullfilled until the data has been fetched in this case

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
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  renderCountryData(data[0]);
  console.log(data);
};

whereAmI("spain");

console.log("First");
