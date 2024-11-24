import { Counter } from "../counter";
import { greeting, showAlert } from "../latihan";

describe("Latihan", () => {
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

  test("Reset the count using reset button", () => {
    counter.increment();
    counter.increment();
    counter.reset();
    expect(counter.getValue()).toBe(0);
  });

  test("Greeting component {nama kalian}", () => {
    const name = "Agung";
    expect(greeting(name)).toBe("Hello, Agung!");
  });

  test("Greeting component {nama dosen kalian}", () => {
    const name = "Pak Irfan";
    expect(greeting(name)).toBe("Hello, Pak Irfan!");
  });

  test("Triggers alert with correct message when clicked", () => {
    const message = "This is an alert message!";
    const result = showAlert(message);
    expect(result).toBe(message);
  });
});
