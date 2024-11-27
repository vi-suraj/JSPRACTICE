// sort acceding descending

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const assMov = movements.sort((a, b) => a - b);
console.log(assMov);

const desMov = movements.sort((a, b) => b - a);
console.log(assMov);
