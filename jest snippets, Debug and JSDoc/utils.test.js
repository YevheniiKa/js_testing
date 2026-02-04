const { slice } = require("./utils");

describe(`slice`, () => {
  it(`cuts from 'begin' to 'end'`, () => {
    const result = slice("0123456789", 3, 8);

    expect(result).toBe("34567");
  });

  it(`cuts from 'begin' without 'end'`, () => {
    const result = slice("0123456789", 3);

    expect(result).toBe("3456789");
  });

  it(`cuts without 'begin' & 'end'`, () => {
    const result = slice("0123456789");

    expect(result).toBe("0123456789");
  });
});
