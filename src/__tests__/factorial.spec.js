import { factorial } from '../factorial';

describe("factorial()", () => {
  it("should calc 1! as 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should calc 3! as 6", () => {
    expect(factorial(3)).toBe(6);
  });
});
