export class TimeNegativeError extends Error {
  constructor(input) {
    super(`Time cannot be negative: ${input}`);
  }
}
export const Time = (input) => {
  const value = typeof input === "number" ? input : Number.parseInt(input, 10);

  if (value < 0) {
    throw new TimeNegativeError(input);
  }

  return value;
};
