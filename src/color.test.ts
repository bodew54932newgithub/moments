const Color = (input) => input;

describe("Color", () => {
  test("when input is a valid hexadecimal number", () => {
    const input = "0x012345";
    expect(Color(input)).toStrictEqual(input);
  });
});
