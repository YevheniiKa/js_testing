const { addCssClass, removeCssClass } = require("./utils");

describe.skip("addCssClass", () => {
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
      classname: "   joke   joke    new  new    ", // 'joke new'
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });
});

describe("removeCssClass", () => {
  it.skip("should remove class name", () => {
    const el = {
      classname: "joke new",
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });
  it.only("should remove extras spaces", () => {
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
