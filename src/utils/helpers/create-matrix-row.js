import { nanoid } from "nanoid";

export const createMatrixRow = (length) =>
  Array(length)
    .fill()
    .map(() => ({
      id: nanoid(),
      amount: Math.floor(Math.random() * (999 - 100) + 100),
    }));
