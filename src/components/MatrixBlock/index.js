import { CustomButton } from "../shared/CustomButton";
import { TableRow } from "../Matrix/TableRow";
import { MatrixAverage } from "../Matrix/AvarageRow";
import { TableHead } from "../Matrix/TableHead";
import styles from "./MatrixBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addMatrixRow } from "../../matrix-services/actions";
import { getMatrixColumnsSelector, getMatrixDataSelector} from "../../matrix-services/selectors";

export const Matrix = () => {
  const dispatch = useDispatch();

  const matrix = useSelector(getMatrixDataSelector);

  const columns = useSelector(getMatrixColumnsSelector);

  const handleAddRow = () => dispatch(addMatrixRow(columns));

  return (
    !!matrix.length && (
      <div className="app__matrix-block">
        <CustomButton
          label="Add row"
          className={styles.button_green}
          onClick={handleAddRow}
        />
        <table className={styles.table}>
          <TableHead />
          <tbody>
            {matrix.map((item, index) => (
              <TableRow
                key={`${item}+${index}`}
                row={item}
                index={index}
                styles={styles}
              />
            ))}
            <MatrixAverage styles={styles.cell_green} />
          </tbody>
        </table>
      </div>
    )
  );
};
