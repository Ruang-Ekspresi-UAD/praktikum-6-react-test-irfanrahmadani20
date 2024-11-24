import { Counter } from "../counter";
import { displayValue } from "../display";

describe("Percobaan", () => {
  let counter;

  beforeEach(() => {
    counter = new Counter();
  });

  test("Counter Default Value must be 0", () => {
    expect(counter.getValue()).toBe(0);
  });

  test("Increment works when button clicked", () => {
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });

  test("Decrement works when button clicked", () => {
    counter.decrement();
    expect(counter.getValue()).toBe(-1);
  });

  test("Display has correct value", () => {
    const value = counter.getValue();
    expect(displayValue(value)).toBe("The current value is: 0");
  });
});
