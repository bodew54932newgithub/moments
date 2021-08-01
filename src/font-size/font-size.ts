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

export const FontSize = (input) => {
  if (!["string", "number"].includes(typeof input) || input === "") {
    throw new FontSizeEmptyError();
  }

  const value = Number.parseInt(input, 10);

  if (value < MIN) {
    throw new FontSizeTooSmallError(input);
  }

  return value;
};
