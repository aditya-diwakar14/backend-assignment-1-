// app.js
// Demonstrates reusing the isEven and logger custom modules

const isEven = require("./modules/isEven");
const { log } = require("./modules/logger");

log("Starting module reuse demo");

const numbers = [4, 7, 10, 15, 22];

numbers.forEach((n) => {
  if (isEven(n)) {
    log(`${n} is even`);
  } else {
    log(`${n} is odd`);
  }
});

log("Demo finished");
