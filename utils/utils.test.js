const { addCssClass, removeCssClass } = require("./utils");

describe("addCssClass", () => {
  it("should add class name", () => {
    const el = {
      classname: "joke new",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  it("should check already existed class name", () => {
    const el = {
      classname: "joke new",
    };
    addCssClass(el, "new");

    expect(el.classname).toBe("joke new");
  });

  it("should check already existed class name in class name", () => {
    const el = {
      classname: "joke new",
    };
    addCssClass(el, "ok");

    expect(el.classname).toBe("joke new ok");
  });

  it("should trim spaces", () => {
    const el = {
      classname: "     joke new     ",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  it("should remove inner spaces", () => {
    const el = {
      classname: "     joke     new     ",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  it("should remove all spaces for duplicate class name", () => {
    const el = {
      classname: "     joke     new     ",
    };
    addCssClass(el, "new");

    expect(el.classname).toBe("joke new");
  });

  it("should check and remove all duplicates", () => {
    const el = {
      classname: "   joke   joke    new  new    ",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  it("should throw an error if params are invalid", () => {
    const el = {};
    expect(() => {
      addCssClass(el, "active");
    }).toThrow();
  });

  it("should throw an error if params are invalid", () => {
    const el = {
      classnames: 34,
    };
    expect(() => {
      addCssClass(el, "active");
    }).toThrow();
  });
});

describe("removeCssClass", () => {
  it("should remove class name", () => {
    const el = {
      classname: "joke new",
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });
  it("should remove extras spaces", () => {
    const el = {
      classname: "    joke    new   ",
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });

  it("should remove duplicates", () => {
    const el = {
      classname: "    joke   new  new  joke new   ",
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });
});
