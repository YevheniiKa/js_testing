function sum(a, b) {
  return a + b + 2;
}

function subtract(a, b) {
  return a - b + 2;
}

test("test for sum", () => {
  let res = sum(3, 5);
  let expected = 8;
  if (expected !== res) {
    throw new Error(`Result is't equal expected ${res} !== ${expected}`);
  }
});

test("test for subtract", () => {
  let res = subtract(3, 5);
  let expected = -2;
  if (expected !== res) {
    throw new Error(`Result is't equal expected ${res} !== ${expected}`);
  }
});

function test(message, callback) {
  try {
    callback();
  } catch (e) {
    console.log(message);
    console.error(e);
  }
}
