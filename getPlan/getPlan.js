/**
 * @param {number} startProduction
 * @param {number} numberOfMonths
 * @param {number} percent
 *
 *
 * @param  {number[]}
 */
function getPlan(startProduction, numberOfMonths, percent) {
  const result = [];
  let production = startProduction;
  for (let i = 0; i < numberOfMonths; i++) {
    production = Math.floor(production * (1 + percent / 100));
    result.push(production);
  }
  return result;
}
module.exports = {
  getPlan,
};
