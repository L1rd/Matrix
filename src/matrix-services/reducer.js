import { MatrixActions } from "../store/action-types";
import { createMatrixRow } from "../utils/helpers/create-matrix-row";

const matrixState = {
  matrix: [],
  row: 0,
  columns: 0,
  cells: 0,
  closestCellIds: [],
};

export const matrixReducer = (state = matrixState, action) => {
  const {
    SET_SETTINGS,
    ADD_ROW,
    CREATE_MATRIX,
    REMOVE_ROW,
    SET_CLOSEST_ID,
    CLEAR_CLOSEST_ID,
    INCREASE_AMOUNT,
  } = MatrixActions;

  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        [action.payload.name]:
          +action.payload.value <= 0 ? 0 : +action.payload.value,
      };

    case ADD_ROW:
      return {
        ...state,
        matrix: [...state.matrix, createMatrixRow(action.payload)],
      };

    case CREATE_MATRIX:
      const matrix = Array(state.rows)
        .fill()
        .map(() => createMatrixRow(state.columns));

      return { ...state, matrix: matrix };

    case REMOVE_ROW:
      return { ...state, matrix: state.matrix.filter((_, indexRow) => indexRow !== action.payload) };

    case SET_CLOSEST_ID:
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

    case CLEAR_CLOSEST_ID:
      return { ...state, closestCellIds: [] };

    case INCREASE_AMOUNT:
      const handleIncreaseAmount = (cell) =>
        state.matrix.map((row) =>
          row.map((item) =>
            item.id === cell.id
              ? { id: item.id, amount: item.amount + 1 }
              : item
          )
        );
      
      return { ...state, matrix: handleIncreaseAmount(action.payload) };

    default:
      return state;
  }
};
