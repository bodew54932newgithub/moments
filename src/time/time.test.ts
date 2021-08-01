import { Time, TimeNegativeError } from "./time";

describe("Time", () => {
  test("when time is a valid number of seconds", () => {
    const input = 42;
    expect(Time(input)).toStrictEqual(input);
  });

  test("when time is a valid string of seconds", () => {
    const input = "42";
    expect(Time(input)).toStrictEqual(42);
  });

  test("when time is a negative number of seconds, it should fail", () => {
    const input = -1;
    expect(() => Time(input)).toThrowError(new TimeNegativeError(input));
  });
});
