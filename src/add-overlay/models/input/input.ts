import { FilePath } from "../file-path/file-path";
import { Text } from "../text/text";
import { Position } from "../position/position";
import { FontSize } from "../font-size/font-size";
import { Color } from "../color/color";
import { Interval } from "../time/interval";

export const Input = ({
  inputPath,
  outputPath,
  text,
  positionX,
  positionY,
  fontSize,
  color,
  startTime,
  endTime,
}) => ({
  inputPath: FilePath(inputPath),
  outputPath: FilePath(outputPath),
  text: Text(text),
  position: Position({ x: positionX, y: positionY }),
  fontSize: FontSize(fontSize),
  color: Color(color),
  interval: Interval({ start: startTime, end: endTime }),
});
