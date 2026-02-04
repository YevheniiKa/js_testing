/**
 *
 * @param {string} input
 * @param {number} begin
 * @param {number} end
 * @returns
 */
function slice(input, begin, end = input.length) {
  let result = "";

  for (let i = begin; i < end; i++) {
    result += input[i];
  }

  return result;
}
module.exports = { slice };
