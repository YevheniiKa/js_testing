const { addCssClass, removeCssClass } = require("./utils");

describe("addCssClass", () => {
  test("should add class name", () => {
    const el = {
      classname: "joke new",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  test("should check already existed class name", () => {
    const el = {
      classname: "joke new",
    };
    addCssClass(el, "new");

    expect(el.classname).toBe("joke new");
  });

  test("should check already existed class name in class name", () => {
    const el = {
      classname: "joke new",
    };
    addCssClass(el, "ok");

    expect(el.classname).toBe("joke new ok");
  });

  test("should trim spaces", () => {
    const el = {
      classname: "     joke new     ",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  test("should remove inner spaces", () => {
    const el = {
      classname: "     joke     new     ",
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });

  test("should remove all spaces for duplicate class name", () => {
    const el = {
      classname: "     joke     new     ",
    };
    addCssClass(el, "new");

    expect(el.classname).toBe("joke new");
  });

  test("should check and remove all duplicates", () => {
    const el = {
      classname: "   joke   joke    new  new    ", // 'joke new'
    };
    addCssClass(el, "active");

    expect(el.classname).toBe("joke new active");
  });
});

describe("removeCssClass", () => {
  test("should remove class name", () => {
    const el = {
      classname: "joke new", // 'joke'
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });
  test("should remove extras spaces", () => {
    const el = {
      classname: "    joke    new   ", // 'joke'
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });

  test("should remove duplicates", () => {
    const el = {
      classname: "    joke   new  new  joke new   ", // 'joke'
    };
    removeCssClass(el, "new");

    expect(el.classname).toBe("joke");
  });
});
