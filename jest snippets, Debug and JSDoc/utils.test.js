const { slice } = require("./utils");

describe("slice", () => {
  it("should return part of input", () => {
    const result = slice("0123456789", 3, 8);

    expect(result).toBe("34567");
  });

  it("should return from start index till the end", () => {
    const result = slice("0123456789", 3);

    expect(result).toBe("3456789");
  });
});
