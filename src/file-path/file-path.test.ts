import {
  FilePath,
  FilePathEmptyError,
  FilePathInvalidError,
} from "./file-path";

describe("FilePath", () => {
  test("when file path is valid", () => {
    const input = "path.mp4";
    expect(FilePath(input)).toStrictEqual(input);
  });

  test("when file path is empty, it should fail", () => {
    const input = "";
    expect(() => FilePath(input)).toThrowError(new FilePathEmptyError());
  });

  test("when file path is invalid, it should fail", () => {
    const input = "^";
    expect(() => FilePath(input)).toThrowError(new FilePathInvalidError(input));
  });
});
