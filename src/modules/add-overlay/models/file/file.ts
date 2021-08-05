export class FileNotFoundError extends Error {
  constructor(input) {
    super(`File can't be found: ${input}`);
  }
}

export class OverlayTooLongError extends Error {
  constructor({ overlayLength, videoLength }) {
    super(
      `Overlay is too long. Length of overlay: ${overlayLength} and video length: ${videoLength}`
    );
  }
}

export const checkIfInputFits = ({ file, input }) => {
  if (file.duration < input.interval.end) {
    throw new OverlayTooLongError({
      videoLength: file.duration,
      overlayLength: input.interval.end,
    });
  }
};
