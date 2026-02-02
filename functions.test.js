const { sum, subtract, fetchUser } = require("./functions");

test("Test for sum", () => {
  expect(sum(3, 5)).toBe(8);
});

test("Test for subtract", () => {
  expect(subtract(3, 5)).toBe(-2);
});
test("Can load user", async () => {
  const user = await fetchUser();
  expect(user.name).toBe("Yevhenii");
});
