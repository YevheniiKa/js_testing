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
test("should check already existed class name", () => {
  const el = {
    classname: "joke new",
  };
  addCssClass(el, "ok");

  expect(el.classname).toBe("joke new ok");
});
