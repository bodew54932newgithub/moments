import { Color, ColorEmptyError, ColorInvalidHexadecimalError } from "./color";

describe("Color", () => {
  test("when input is a valid hexadecimal number", () => {
    const input = "0x012345";
    expect(Color(input)).toStrictEqual(input);
  });

  test("when input is empty, it should fail", () => {
    const input = "";
    expect(() => Color(input)).toThrowError(new ColorEmptyError());
  });

  test("when input is not a valid hexadecimal number, it should fail", () => {
    const input = "0xG";
    expect(() => Color(input)).toThrowError(
      new ColorInvalidHexadecimalError(input)
    );
  });

  test("when input doesn't start by '0x', it should fail", () => {
    const input = "10F";
    expect(() => Color(input)).toThrowError(
      new ColorInvalidHexadecimalError(input)
    );
  });
});
