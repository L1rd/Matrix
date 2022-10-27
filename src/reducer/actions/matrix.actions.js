export const MatrixActions = {
  ADD_ROW: "ADD_ROW",
  REMOVE_ROW: "REMOVE_ROW",
  CREATE_MATRIX: "CREATE_MATRIX",
  SET_SETTINGS: "SET_SETTINGS",
  SET_CLOSEST_ID: "SET_CLOSEST_ID",
  INCREASE_AMOUNT: "INCREASE_AMOUNT",
  CLEAR_CLOSEST_ID: "CLEAR_CLOSEST_ID",
};

export const ADD_ROW = (payload) => ({
  type: MatrixActions.ADD_ROW,
  payload: payload,
});

export const REMOVE_ROW = (payload) => ({
  type: MatrixActions.REMOVE_ROW,
  payload: payload,
});

export const CREATE_MATRIX = (payload) => ({
  type: MatrixActions.CREATE_MATRIX,
  payload: payload,
});

export const SET_SETTINGS = (payload) => ({
  type: MatrixActions.SET_SETTINGS,
  payload: payload,
});

export const SET_CLOSEST_ID = (payload) => ({
  type: MatrixActions.SET_CLOSEST_ID,
  payload: payload,
});

export const INCREASE_AMOUNT = (payload) => ({
  type: MatrixActions.INCREASE_AMOUNT,
  payload: payload,
});

export const CLEAR_CLOSEST_ID = (payload) => ({
  type: MatrixActions.CLEAR_CLOSEST_ID,
  payload: payload,
});
