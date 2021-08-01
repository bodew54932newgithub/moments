export class ColorEmptyError extends Error {
  constructor() {
    super("Color cannot be empty");
  }
}

export class ColorInvalidHexadecimalError extends Error {
  constructor(value) {
    super(`Given value is not a valid hexadecimal number: ${value}`);
  }
}

export const MAX = 0xff_ff_ff;

export class ColorTooHighError extends Error {
  constructor(value) {
    super(`Given value is too high, max allowed value is ${MAX}: ${value}`);
  }
}

export const Color = (input) => {
  if (typeof input !== "string" || input === "") {
    throw new ColorEmptyError();
  }

  const number = Number(input);
  if (!input.startsWith("0x") || Number.isNaN(number)) {
    throw new ColorInvalidHexadecimalError(input);
  }

  if (number > MAX) {
    throw new ColorTooHighError(input);
  }

  return input;
};
