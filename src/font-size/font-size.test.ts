import { FontSize } from "./font-size";

describe("FontSize", () => {
  test("when the font size is valid", () => {
    const input = 42;
    expect(FontSize(42)).toStrictEqual(input);
  });
});
