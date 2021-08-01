import { Time } from "./time";

describe("Time", () => {
  test("when time is a valid number of seconds", () => {
    const input = 42;
    expect(Time(input)).toStrictEqual(input);
  });

  test("when time is a valid string of seconds", () => {
    const input = "42";
    expect(Time(input)).toStrictEqual(42);
  });
});
