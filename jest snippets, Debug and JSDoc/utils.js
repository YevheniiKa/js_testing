/**
 *
 * @param {string} input
 * @param {number} begin
 * @param {number} end
 * @returns
 */
function slice(input, begin = 0, end = input.length) {
  let result = "";
  begin = Math.trunc(begin);
  end = Math.trunc(end);

  if (isNaN(begin)) {
    begin = 0;
  }

  if (isNaN(end)) {
    end = input.length;
  }

  let startIndex = begin;
  let endIndex = end;

  if (begin < 0) {
    startIndex = Math.max(input.length + begin, 0);
  }

  if (end < 0) {
    endIndex = Math.max(input.length + end, 0);
  }

  if (endIndex > input.length) {
    endIndex = input.length;
  }

  for (let i = startIndex; i < endIndex; i++) {
    result += input[i];
  }

  return result;
}
module.exports = { slice };
