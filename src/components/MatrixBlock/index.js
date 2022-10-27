import { CustomButton } from "../shared/CustomButton";
import { TableRow } from "../Matrix/TableRow";
import { MatrixAverage } from "../Matrix/AvarageRow";
import { TableHead } from "../Matrix/TableHead";
import styles from "./MatrixBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ROW } from "../../reducer/actions/matrix.actions";

export const Matrix = () => {
  const dispatch = useDispatch();

  const { matrix, columns } = useSelector((state) => state);

  const handleAddRow = () => dispatch(ADD_ROW(columns));

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
