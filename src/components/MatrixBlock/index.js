import { useState } from "react";
import { CustomButton } from "../shared/CustomButton";
import { TableRow } from "../Matrix/TableRow";
import { MatrixAverage } from "../Matrix/AvarageRow";
import { createMatrixRow } from "../../utils/helpers/create-matrix-row";
import { TableHead } from "../Matrix/TableHead";
import styles from "./MatrixBlock.module.scss";

export const Matrix = ({ data, settings, onSetData }) => {
  const [closestCellIds, setСlosestCellIds] = useState([]);

  const handleAddRow = () =>
    onSetData([...data, createMatrixRow(settings.columns)]);

  return (
    !!data.length && (
      <div className="app__matrix-block">
        <CustomButton
          label="Add row"
          className={styles.button_green}
          onClick={handleAddRow}
        />
        <table className={styles.table}>
          
            <TableHead columnsCount={settings.columns} />
          
          <tbody>
            {data.map((item, index) => (
              <TableRow
                key={`${item}+${index}`}
                closestCellIds={closestCellIds}
                onSetClosestCellIds={setСlosestCellIds}
                row={item}
                closestCellsCount={settings.cells}
                matrix={data}
                index={index}
                styles={styles}
                onSetData={onSetData}
              />
            ))}
            <MatrixAverage data={data} styles={styles.cell_green} />
          </tbody>
        </table>
      </div>
    )
  );
};
