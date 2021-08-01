export class ColorEmptyError extends Error {
  constructor() {
    super("Color cannot be empty");
  }
}

export const Color = (input) => {
  if (input == null || input === "") {
    throw new ColorEmptyError();
  }

  return input;
};
