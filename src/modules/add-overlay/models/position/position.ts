export class PositionInvalidCoordinateError extends Error {
  constructor(input) {
    super(`Coordinates of a Position can't be negative: ${input}`);
  }
}
export const Position = (input) => {
  if (
    !["string", "number"].includes(typeof input.x) ||
    !["string", "number"].includes(typeof input.y)
  ) {
    throw new PositionInvalidCoordinateError(input);
  }

  const inputConverted = {
    x: typeof input.x === "number" ? input.x : Number.parseInt(input.x, 10),
    y: typeof input.y === "number" ? input.y : Number.parseInt(input.y, 10),
  };

  if (
    !Number.isInteger(inputConverted.x) ||
    !Number.isInteger(inputConverted.y) ||
    inputConverted.x < 0 ||
    inputConverted.y < 0
  ) {
    throw new PositionInvalidCoordinateError(input);
  }

  return inputConverted;
};
