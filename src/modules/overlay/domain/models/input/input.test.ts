import { Input } from "./input";

describe("Input", () => {
  test("when input is valid", () => {
    const input = {
      inputPath: "input.mp4",
      outputPath: "output.mp4",
      text: "my text",
      positionX: "10",
      positionY: "10",
      fontSize: "42",
      color: "0xFFAABB",
      startTime: "10",
      endTime: "30",
    };

    expect(Input(input)).toStrictEqual({
      inputPath: "input.mp4",
      outputPath: "output.mp4",
      text: "my text",
      position: { x: 10, y: 10 },
      fontSize: 42,
      color: 0xff_aa_bb,
      interval: { start: 10, end: 30 },
    });
  });
});
