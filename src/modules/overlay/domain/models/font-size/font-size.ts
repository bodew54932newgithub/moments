export class FontSizeEmptyError extends Error {
  constructor() {
    super("Font size cannot be empty");
  }
}

export const MIN = 1;

export class FontSizeTooSmallError extends Error {
  constructor(value) {
    super(`Font size cannot be under ${MIN}: ${value}`);
  }
}

export class FontSizeInvalidError extends Error {
  constructor(value) {
    super(`Font size is not a valid number: ${value}`);
  }
}

export const FontSize = (input) => {
  if (!["string", "number"].includes(typeof input) || input === "") {
    throw new FontSizeEmptyError();
  }

  const value = typeof input === "number" ? input : Number.parseInt(input, 10);

  if (Number.isNaN(value) || !Number.isInteger(value)) {
    throw new FontSizeInvalidError(input);
  }

  if (value < MIN) {
    throw new FontSizeTooSmallError(input);
  }

  return value;
};
