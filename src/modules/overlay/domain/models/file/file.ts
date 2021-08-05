export class FileNotFoundError extends Error {
  constructor(input) {
    super(`File can't be found: ${input}`);
  }
}

// @ts-ignore
export const checkIfInputFits = ({ file, input }) => true;
