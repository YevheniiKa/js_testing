function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, {
      id: 1,
      name: "Yevhenii",
    });
  });
}
module.exports = {
  sum,
  subtract,
  fetchUser,
};
