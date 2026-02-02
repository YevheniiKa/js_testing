function expect(actual) {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`Result is't equal expected ${actual} !== ${expected}`);
      }
    },
  };
}

async function test(title, cb) {
  try {
    await cb();
    console.log("Succeed:", title);
  } catch (e) {
    console.log("Failed:", title);
    console.error(e);
  }
}

global.test = test;
global.expect = expect;
