const { addCssClass } = require("./utils");

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
