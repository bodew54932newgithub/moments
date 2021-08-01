import { FontSize, FontSizeEmpty } from "./font-size";

describe("FontSize", () => {
  test("when the font size is valid", () => {
    const input = 42;
    expect(FontSize(input)).toStrictEqual(input);
  });

  test("when the font size is empty, it should fail", () => {
    const input = "";
    expect(() => FontSize(input)).toThrowError(new FontSizeEmpty());
  });
});
