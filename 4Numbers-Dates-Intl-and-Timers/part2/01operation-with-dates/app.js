// find the difffence date

const betweenDays = function (date1, date2) {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
};

const days = betweenDays(new Date(2024, 11, 30), new Date(2024, 11, 20));
console.log(days);
