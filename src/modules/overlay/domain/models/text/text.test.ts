import { Text, TextEmptyError } from "./text";

describe("Text", () => {
  test("when text is valid", () => {
    const input = "my text";
    expect(Text(input)).toStrictEqual(input);
  });

  test("when text is empty, it should fail", () => {
    const input = "";
    expect(() => Text(input)).toThrowError(new TextEmptyError());
  });
});
