import { Position, PositionInvalidCoordinateError } from "./position";

describe("Position", () => {
  test("when a position's coordinates are valid numbers", () => {
    const input = { x: 10, y: 20 };
    expect(Position(input)).toStrictEqual(input);
  });

  test("when a position's coordinates are valid strings", () => {
    const input = { x: "10", y: 20 };
    expect(Position(input)).toStrictEqual({ x: 10, y: 20 });
  });

  test("when a position's coordinate is negative, it should fail", () => {
    const input = { x: 10, y: -5 };
    expect(() => Position(input)).toThrowError(
      new PositionInvalidCoordinateError(input)
    );
  });

  test("when a position's coordinate is not a valid number, it should fail", () => {
    const input = { x: 10, y: -5 };
    expect(() => Position(input)).toThrowError(
      new PositionInvalidCoordinateError(input)
    );
  });

  test("when a position's coordinate is not an integer, it should fail", () => {
    const input = { x: 0.5, y: 5 };
    expect(() => Position(input)).toThrowError(
      new PositionInvalidCoordinateError(input)
    );
  });
});
