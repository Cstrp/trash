const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample (sampleActivity) {
  const a = 0.693;
  const b = a / HALF_LIFE_PERIOD;
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity.trim().length < 1 ||
    Number.isNaN(Number(sampleActivity)) ||
    Number.parseFloat(sampleActivity) <= 0 ||
    Number.parseFloat(sampleActivity) > 15
  ) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity, 10)) / b);
}

module.exports = {
  dateSample,
};
