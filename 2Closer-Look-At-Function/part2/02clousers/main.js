"use strict";

// closer is not a feature that we explicitly use so we dont create clouser manually like we create new array and new function a closer simply happens automatically in certain situation we just need to recognaize the situations

// ** Closuser make a function remember all the varibale that existed at the function birthplace

const secureBooking = function () {
  let passangerCount = 0;
  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
