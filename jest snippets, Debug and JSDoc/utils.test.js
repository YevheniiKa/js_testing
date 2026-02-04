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

  it(`without 'begin' & 'end'`, () => {
    const result = slice("0123456789");

    expect(result).toBe("0123456789");
  });

  it(`from 0 to input.length`, () => {
    const result = slice("0123456789", 0, 10);

    expect(result).toBe("0123456789");
  });

  it(`'begin' === 'end'`, () => {
    const result = slice("0123456789", 4, 4);

    expect(result).toBe("");
  });

  it(`'begin' < 0 & 'end' > 0`, () => {
    const result = slice("0123456789", -4, 9);

    expect(result).toBe("678");
  });

  it(`'begin' > 0 & 'end' < 0`, () => {
    const result = slice("0123456789", 4, -3);

    expect(result).toBe("456");
  });

  it(`'begin' < 0 & 'end' < 0`, () => {
    const result = slice("0123456789", -4, -3);

    expect(result).toBe("6");
  });

  it(`'begin' < 0 & without 'end'`, () => {
    const result = slice("0123456789", -4);

    expect(result).toBe("6789");
  });

  it(`'begin' > input.length & without 'end'`, () => {
    const result = slice("0123456789", 12);

    expect(result).toBe("");
  });

  it(`'end' > input.length & without 'end'`, () => {
    const result = slice("0123456789", 2, 15);

    expect(result).toBe("23456789");
  });

  it(`'end' > 'begin'`, () => {
    const result = slice("0123456789", 4, 2);

    expect(result).toBe("");
  });

  it(`begin too small`, () => {
    const result = slice("0123456789", -25);

    expect(result).toBe("0123456789");
  });
  it(`begin too small`, () => {
    const result = slice("0123456789", -25, -15);

    expect(result).toBe("");
  });
});
