// modules/logger.js
// Custom logger module - prints messages with a timestamp

function log(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

module.exports = { log };
