export class FontSizeEmpty extends Error {
  constructor() {
    super("Font size cannot be empty");
  }
}

export const FontSize = (input) => {
  if (!["string", "number"].includes(typeof input) || input === "") {
    throw new FontSizeEmpty();
  }

  return input;
};
