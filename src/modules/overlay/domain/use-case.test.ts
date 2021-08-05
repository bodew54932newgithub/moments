import { Time } from "./models/time/time";
import { addOverlay } from "./use-case";
import { Resolution } from "./models/resolution/resolution";
import { FileNotFoundError } from "./models/file/file";

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
  fileExists: {
    get(filename) {
      return Promise.resolve(
        filename === "test_input1.mp4"
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
  },
  fileDoesntExist: {
    get() {
      return Promise.resolve();
    },
  },
};

const overlayRepository = {
  add() {},
};

describe("Add overlay", () => {
  test("when the file exist and all the parameters are valid", async () => {
    await expect(
      addOverlay({
        fileRepository: fileRepository.fileExists,
        overlayRepository,
      })(input)
    ).resolves.not.toThrow();
  });
  test("when the file exist and the position is (0, 0)", async () => {
    await expect(
      addOverlay({
        fileRepository: fileRepository.fileExists,
        overlayRepository,
      })({
        ...input,
        positionX: "0",
        positionY: "0",
      })
    ).resolves.not.toThrow();
  });
  test("when the file doesn't exist", async () => {
    await expect(
      addOverlay({
        fileRepository: fileRepository.fileDoesntExist,
        overlayRepository,
      })(input)
    ).rejects.toThrowError(new FileNotFoundError(input.inputPath));
  });
});
