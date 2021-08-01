export class TextEmptyError extends Error {
  constructor() {
    super("Text cannot be empty");
  }
}

export const Text = (input) => {
  if (typeof input !== "string" || input === "") {
    throw new TextEmptyError();
  }

  return input;
};
