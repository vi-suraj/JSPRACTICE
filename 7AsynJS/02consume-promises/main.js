"use strict";

// when we fetch data from url it will immeditely return promise that is pending because asynchronus task of getting a data is still running in the background

// 1 on all promises we can use then method and the then method use callback function that need to be executed as soon as a promise is fullfilled

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

const request = fetch("https://restcountries.com/v3.1/name/india");

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // when we console the response we still not access the data to see the data we need to use json() methon on the response
    // when use json() method it will return promise and to handle that promise we now again use the then method and use call back to access the response

    // .then(function (response) {
    //   console.log(response);
    //   return response.json();
    // })
    // .then(function (response) {
    //   console.log(response);
    //   renderCountryData(response[0]);
    // });
    .then((response) => response.json())
    .then((data) => renderCountryData(data[0]));
};

getCountryData("germany");
