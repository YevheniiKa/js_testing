const { sum, subtract } = require("./functions");
test("Test for sum", () => {
  expect(sum(3, 5)).toBe(8);
});

test("Test for subtract", () => {
  expect(subtract(3, 5)).toBe(-2);
});

function expect(actual) {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`Result is't equal expected ${actual} !== ${expected}`);
      }
    },
  };
}

function test(title, cb) {
  try {
    cb();
    console.log("Succeed:", title);
  } catch (e) {
    console.log("Failed:", title);
    console.error(e);
  }
}
