import { Input } from "./models/input/input";
import * as File from "./models/file/file";
import { FileNotFoundError } from "./models/file/file";

export const addOverlay =
  ({ fileRepository, overlayRepository }) =>
  async (inputRaw) => {
    const input = Input(inputRaw);
    const file = await fileRepository.get(input.inputPath);

    if (file == null) {
      throw new FileNotFoundError(input.inputPath);
    }

    File.checkIfInputFits({ file, input });
    await overlayRepository.add({ input, file });
  };
