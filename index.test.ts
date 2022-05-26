const { add } = require("./add");

test("add two numbers", () => {
  const res = add(1, 2);
  expect(res).toBe(3);
});
