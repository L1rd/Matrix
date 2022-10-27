import { createStore } from "redux";
import { matrixReducer } from "..";

export const store = createStore(matrixReducer);
