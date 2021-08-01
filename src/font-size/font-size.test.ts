import {
  FontSize,
  FontSizeEmptyError,
  FontSizeInvalidError,
  FontSizeTooSmallError,
  MIN,
} from "./font-size";

describe("FontSize", () => {
  test("when the font size is a valid number", () => {
    const input = 42;
    expect(FontSize(input)).toStrictEqual(input);
  });

  test("when the font size is a valid string, it should be converted to number", () => {
    const input = "42";
    expect(FontSize(input)).toStrictEqual(42);
  });

  test("when the font size is empty, it should fail", () => {
    const input = "";
    expect(() => FontSize(input)).toThrowError(new FontSizeEmptyError());
  });

  test(`when the font size is under ${MIN}, it should fail`, () => {
    const input = 0;
    expect(() => FontSize(input)).toThrowError(
      new FontSizeTooSmallError(input)
    );
  });

  test(`when the font size is an invalid number, it should fail`, () => {
    const input = "test";
    expect(() => FontSize(input)).toThrowError(new FontSizeInvalidError(input));
  });

  test(`when the font size is not a whole number, it should fail`, () => {
    const input = 12.3;
    expect(() => FontSize(input)).toThrowError(new FontSizeInvalidError(input));
  });
});
