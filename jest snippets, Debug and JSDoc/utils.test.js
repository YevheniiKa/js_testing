const { slice } = require("./utils");

describe(`'slice' function`, () => {
  it(
    `should return chars between 'begin' and not including 'end'` +
      `if 0 < begin < end < input.length`,
    () => {
      const result = slice("0123456789", 3, 8);

      expect(result).toBe("34567");
    },
  );

  it(
    `should return chars between 'begin' and till the 'end' of input` +
      `if 0 < begin < input.length and 'end' is omitted`,
    () => {
      const result = slice("0123456789", 3);

      expect(result).toBe("3456789");
    },
  );
});
