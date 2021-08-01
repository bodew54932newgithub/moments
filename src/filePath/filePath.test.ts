const FilePath = (input) => input;

describe("FilePath", () => {
  test("when file path is valid", () => {
    const input = "path.mp4";
    expect(FilePath(input)).toStrictEqual(input);
  });
});
