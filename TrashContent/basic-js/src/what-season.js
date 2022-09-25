const {NotImplementedError} = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!`${date}`.length || date === undefined) {
    return 'Unable to determine the time of year!'
  }
  const timeOfTheYear = ['winter', 'spring', 'summer', 'autumn']
  try {
    date.getTime()
  } catch (err) {
    throw new Error('Invalid date!')
  }
  let month = Math.round(date.getMonth() / 3)
  month = month <= 3 ? month : 0
  return timeOfTheYear[month]
}

module.exports = {
  getSeason,
}
