"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, maps) {
  console.log(`${key}: ${value}`);
});

const currenciesState = new Set(["USD", "EUR", "GBP"]);

currenciesState.forEach(function (value, key, maps) {
  console.log(`${key}: ${value}`);
});
