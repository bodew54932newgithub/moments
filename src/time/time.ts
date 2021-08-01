export class TimeNegativeError extends Error {
  constructor(input) {
    super(`Time cannot be negative: ${input}`);
  }
}

export class TimeEmptyError extends Error {
  constructor() {
    super(`Time cannot be empty`);
  }
}

export const Time = (input) => {
  if (!["number", "string"].includes(typeof input) || input === "") {
    throw new TimeEmptyError();
  }

  const value = typeof input === "number" ? input : Number.parseInt(input, 10);

  if (value < 0) {
    throw new TimeNegativeError(input);
  }

  return value;
};
