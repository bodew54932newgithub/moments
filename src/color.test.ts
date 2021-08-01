import { Color, ColorEmptyError } from "./color";

describe("Color", () => {
  test("when input is a valid hexadecimal number", () => {
    const input = "0x012345";
    expect(Color(input)).toStrictEqual(input);
  });

  test("when input is empty, it should fail", () => {
    const input = "";
    expect(() => Color(input)).toThrowError(new ColorEmptyError());
  });
});
