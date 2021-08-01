export class ColorEmptyError extends Error {
  constructor() {
    super("Color cannot be empty");
  }
}

export class ColorInvalidHexadecimalError extends Error {
  constructor(value) {
    super(`Given value is not a valid hexadecimal number ${value}`);
  }
}

export const Color = (input) => {
  if (typeof input !== "string" || input === "") {
    throw new ColorEmptyError();
  }

  if (!input.startsWith("0x") || Number.isNaN(Number(input))) {
    throw new ColorInvalidHexadecimalError(input);
  }

  return input;
};
