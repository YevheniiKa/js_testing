const { getPlan } = require("./getPlan");
const result = getPlan(200, 3, 50);

// test("Should be an array", () => {
//   expect(result).toBeInstanceOf(Array);
// });

// test("Should have right length", () => {
// expect(result.length).toBe(3);
//   expect(result).toHaveLength(3);
// });

// the last test = the same as first two

test("Should have expected values", () => {
  const result = getPlan(200, 3, 50);
  expect(result).toEqual([300, 450, 675]);
});

test("Should return 0 for 0 production", () => {
  const result = getPlan(0, 4, 100);
  expect(result).toEqual([0, 0, 0, 0]);
});

test("Should return empty array for 0 month", () => {
  const result = getPlan(100, 0, 100);
  expect(result).toEqual([]);
});

test("Should return same production if percent is 0", () => {
  const result = getPlan(100, 3, 0);
  expect(result).toEqual([100, 100, 100]);
});

test("Should expected values with rounds", () => {
  const result = getPlan(10, 3, 30);
  expect(result).toEqual([13, 16, 20]);
});
