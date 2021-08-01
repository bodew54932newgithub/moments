import { Position } from "./position";

describe("Position", () => {
  test("when a position's coordinates are valid", () => {
    const input = { x: 10, y: 10 };
    expect(Position(input)).toStrictEqual(input);
  });
});
