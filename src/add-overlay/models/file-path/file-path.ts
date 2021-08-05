import { URL } from "url";

export class FilePathEmptyError extends Error {
  constructor() {
    super("File path cannot be empty");
  }
}

export class FilePathInvalidError extends Error {
  constructor(value) {
    super(`File path is not valid: ${value}`);
  }
}

export const FilePath = (input) => {
  if (typeof input !== "string" || input === "") {
    throw new FilePathEmptyError();
  }

  try {
    // eslint-disable-next-line no-new
    new URL(`file://${input}`);
  } catch {
    throw new FilePathInvalidError(input);
  }

  return input;
};
