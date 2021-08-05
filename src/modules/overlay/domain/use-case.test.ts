import { Time } from "./models/time/time";
import { addOverlay } from "./use-case";
import { Resolution } from "./models/resolution/resolution";

describe("Add overlay", () => {
  test("when the file exist and all the parameters are valid", async () => {
    const input = {
      inputPath: "test_input1.mp4",
      outputPath: "test_output1.mp4",
      endTime: "40",
      startTime: "23",
      color: "0xFFFFFF",
      fontSize: "64",
      positionX: "200",
      positionY: "100",
      text: "I’m sOoOo good at this game! xD",
    };
    const fileRepository = {
      get(filename) {
        return Promise.resolve(
          filename === "test_input3.mp4"
            ? {
                duration: Time(60),
                resolution: Resolution({
                  x: 1920,
                  y: 1080,
                }),
              }
            : undefined
        );
      },
    };
    const overlayRepository = {
      add() {},
    };
    await expect(
      addOverlay({ fileRepository, overlayRepository })(input)
    ).resolves.not.toThrow();
  });
});
