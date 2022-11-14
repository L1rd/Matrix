import { createStore } from "redux";
import { matrixReducer } from "../matrix-services/reducer.js";

export const store = createStore(matrixReducer);