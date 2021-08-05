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

export class OverlayOutOfVideoError extends Error {
  constructor({ overlayPosition, videoResolution }) {
    super(
      `Overlay out of the video. Overlay position: ${overlayPosition} and video resolution: ${videoResolution}`
    );
  }
}

export const checkIfInputFits = ({ file, input }) => {
  if (file.resolution.y < input.position.y) {
    throw new OverlayOutOfVideoError({
      overlayPosition: input.position,
      videoResolution: file.resolution,
    });
  }

  if (file.duration < input.interval.end) {
    throw new OverlayTooLongError({
      videoLength: file.duration,
      overlayLength: input.interval.end,
    });
  }
};
