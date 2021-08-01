import {
  FontSize,
  FontSizeEmptyError,
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
});
