const Text = (input) => input;

describe("Text", () => {
  test("when test is valid", () => {
    const input = "my text";
    expect(Text(input)).toStrictEqual(input);
  });
});
