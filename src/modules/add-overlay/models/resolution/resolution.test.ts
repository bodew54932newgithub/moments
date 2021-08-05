import { Resolution, ResolutionInvalidMeasureError } from "./resolution";

describe("Resolution", () => {
  test("when a resolution's measures are valid numbers", () => {
    const input = { x: 1024, y: 768 };
    expect(Resolution(input)).toStrictEqual(input);
  });

  test("when a resolution's measures are valid strings", () => {
    const input = { x: "1024", y: 768 };
    expect(Resolution(input)).toStrictEqual({ x: 1024, y: 768 });
  });

  test("when a resolution's measure is negative, it should fail", () => {
    const input = { x: 1024, y: -5 };
    expect(() => Resolution(input)).toThrowError(
      new ResolutionInvalidMeasureError(input)
    );
  });

  test("when a resolution's measure is not a valid number, it should fail", () => {
    const input = { x: 1024, y: -5 };
    expect(() => Resolution(input)).toThrowError(
      new ResolutionInvalidMeasureError(input)
    );
  });

  test("when a resolution's measure is not an integer, it should fail", () => {
    const input = { x: 1024.5, y: 768 };
    expect(() => Resolution(input)).toThrowError(
      new ResolutionInvalidMeasureError(input)
    );
  });
});
