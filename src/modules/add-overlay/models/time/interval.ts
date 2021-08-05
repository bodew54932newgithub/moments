import { Time } from "./time";

export class IntervalEndBeforeStartError extends Error {
  constructor(input) {
    super(`In an interval, the end cannot be before the start:${input}`);
  }
}
export const Interval = ({ start, end }) => {
  if (end < start) {
    throw new IntervalEndBeforeStartError({ start, end });
  }

  return { start: Time(start), end: Time(end) };
};
