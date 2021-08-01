export const Time = (input) =>
  typeof input === "number" ? input : Number.parseInt(input, 10);
