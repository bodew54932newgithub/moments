export class PositionInvalidCoordinateError extends Error {
  constructor(input) {
    super(`Coordinates of a Position can't be negative: ${input}`);
  }
}
export const Position = (input) => {
  if (input.x < 0 || input.y < 0) {
    throw new PositionInvalidCoordinateError(input);
  }

  return input;
};
