import { exec } from "child_process";

export const overlayRepository = {
  add({ input }) {
    exec(`-i ${input.inputPath} 
      -vf
      drawtext="
        enable='between(t,${input.interval.start},${input.interval.end})':
        text='${input.text}':
        fontcolor=${input.color}:
        fontsize=${input.fontSize}:
        x=${input.position.x}:
        y=${input.position.y}"
      ${input.outputPath}`);
  },
};
