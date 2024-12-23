"use strict";

const container = document.querySelector(".countries");

const displayCountries = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const language = data.languages ? Object.values(data.languages)[0] : "N/A";
    const currencies = data.currencies ? Object.values(data.currencies)[0].name : "N/A";

    const html = `    
        <article class="country">
            <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣️</span>${language}</p>
                    <p class="country__row"><span>💰</span>${currencies}</p>
                </div>
        </article>
  `;
    container.insertAdjacentHTML("beforeend", html);
    container.style.opacity = 1;
  });
};

const country = ["india", "australia", "japan", "korea"];
country.forEach(displayCountries);
