import calculate from "../logic/calculate";

describe("test for AC button", () => {
  test("It should return null object ", () => {
    const obj = {
      total: 5,
      next: 3,
      operation: "+",
    };
    const btnValue = "AC";
    const answer = calculate(obj, btnValue);
    expect(answer.total).toBe(null);
    expect(answer.next).toBe(null);
    expect(answer.operation).toBe(null);
  });
});
