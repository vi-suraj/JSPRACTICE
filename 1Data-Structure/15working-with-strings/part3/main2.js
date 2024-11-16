"use strict";

const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightsArray = flights.split("+");

const upperCase = (item) => {
  const text = item.slice(0, 3).toUpperCase();
  return text;
};

for (const flight of flightsArray) {
  const [flightStatus, from, to, time] = flight.split(";");
  const output = `${flightStatus.replaceAll("_", " ").trim()} from ${upperCase(`${from}`)} to ${upperCase(`${to}`)} (${time.replace(":", "h")})`;
  //   console.log(flightStatus, from, to, time);
  console.log(output.padStart(50, " "));
}
