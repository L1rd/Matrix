import { createMatrixRow } from "../utils/helpers/create-matrix-row";
import { MatrixActions } from "./actions/matrix.actions";

const matrixState = {
  matrix: [],
  row: 0,
  columns: 0,
  cells: 0,
  closestCellIds: [],
  isHoverCell: false,
};

export const matrixReducer = (state = matrixState, action) => {
  switch (action.type) {
    case MatrixActions.SET_SETTINGS:
      return {
        ...state,
        [action.payload.name]:
          +action.payload.value <= 0 ? 0 : +action.payload.value,
      };

    case MatrixActions.ADD_ROW:
      return {
        ...state,
        matrix: [...state.matrix, createMatrixRow(action.payload)],
      };

    case MatrixActions.CREATE_MATRIX:
      const matrix = Array(state.rows)
        .fill()
        .map(() => createMatrixRow(state.columns));

      return { ...state, matrix: matrix };

    case MatrixActions.REMOVE_ROW:
      return { ...state, matrix: action.payload };

    case MatrixActions.SET_CLOSEST_ID:
      const closestIds = state.matrix
        .flat()
        .filter((item) => action.payload.id !== item.id)
        .sort(
          (a, b) =>
            Math.abs(a.amount - action.payload.amount) -
            Math.abs(b.amount - action.payload.amount)
        )
        .slice(0, state.cells)
        .map((item) => item.id);
      return { ...state, closestCellIds: closestIds };

    case MatrixActions.CLEAR_CLOSEST_ID:
      return { ...state, closestCellIds: [] };

    case MatrixActions.INCREASE_AMOUNT:
      const handleIncreaseAmount = (cell) =>
        state.matrix.map((row) =>
          row.map((item) => {
            const increase = () => {
              item.amount += 1;
              return item;
            };
            return item.id === cell.id ? increase() : item;
          })
        );

      return { ...state, matrix: handleIncreaseAmount(action.payload) };

    case MatrixActions.HOVER_CELL:
      return { ...state, isHoverCell: action.payload };

    case MatrixActions.HOVER_SUM:
      return { ...state, isHoverSum: action.payload };

    default:
      return state;
  }
};
