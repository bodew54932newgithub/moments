import { Position, PositionInvalidCoordinateError } from "./position";

describe("Position", () => {
  test("when a position's coordinates are valid", () => {
    const input = { x: 10, y: 10 };
    expect(Position(input)).toStrictEqual(input);
  });

  test("when a position's coordinate is negative, it should fail", () => {
    const input = { x: 10, y: -5 };
    expect(() => Position(input)).toThrowError(
      new PositionInvalidCoordinateError(input)
    );
  });
});
