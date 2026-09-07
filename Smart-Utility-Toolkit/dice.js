// dice.js
// Random dice roll generator using the crypto module

const crypto = require("crypto");

function rollDice() {
  // crypto.randomInt(min, max) - max is exclusive
  return crypto.randomInt(1, 7);
}

const rolls = 5;

for (let i = 1; i <= rolls; i++) {
  console.log(`Roll ${i} -> Dice Rolled: ${rollDice()}`);
}
