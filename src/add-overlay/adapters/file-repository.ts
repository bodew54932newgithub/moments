import * as fs from "fs";

export const repository = {
  get(filename) {
    try {
      const file = fs.readFileSync(filename);
      // read the info of the file here

      return {
        resolution: file,
        length: "",
      };
    } catch {
      return undefined;
    }
  },
};
