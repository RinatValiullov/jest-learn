import factorial from "./factorial";

test("1! = 1", () => {
  expect(factorial(1)).toBe(1);
});

test("3! = 6", () => {
  expect(factorial(3)).toBe(6);
});

test("5! = 125", () => {
  expect(factorial(5)).toBe(125);
});

test("0! = 1", () => {
  expect(factorial(0)).toBe(1);
});
