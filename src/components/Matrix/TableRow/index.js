import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { TableCell } from "../TableCell";
import { CustomButton } from "../../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseAmount,
  resetClosestId,
  setClosestId,
  removeMatrixRow,
} from "../../../matrix-services/actions";
import { getMatrixClosestIdSelector} from "../../../matrix-services/selectors";

export const TableRow = ({ row, index, styles }) => {
  const dispatch = useDispatch();

  const [isHoverSum, setIsHoverSum] = useState(false);

  const closestCellIds = useSelector(getMatrixClosestIdSelector);

  const sumRow = row.reduce((sum, current) => sum + current.amount, 0);

  const removeRow = () =>
    dispatch(
      removeMatrixRow(index)
    );

  const getPersentOfCell = (item) => Math.round((100 * item.amount) / sumRow);

  const handleIncreaseAmount = (item) => {
    if (item.amount < 999) {
      dispatch(increaseAmount(item));
      dispatch(setClosestId(item));
    }
  };

  return (
    <tr>
      <TableCell data={index + 1} />
      {row.map((item, index) => (
        <TableCell
          key={item.id}
          onMouseEnter={() => dispatch(setClosestId(item))}
          onMouseLeave={() => dispatch(resetClosestId())}
          data={isHoverSum ? `${getPersentOfCell(item)}%` : item.amount}
          className={closestCellIds?.includes(item.id) && styles.cell_yellow}
          onClick={() => handleIncreaseAmount(item)}
          style={
            isHoverSum
              ? {
                  background: `linear-gradient(to top, red ${getPersentOfCell(
                    item
                  )}%, transparent 0%)`,
                }
              : null
          }
        />
      ))}
      <TableCell
        data={sumRow}
        onMouseEnter={() => setIsHoverSum(true)}
        onMouseLeave={() => setIsHoverSum(false)}
        className={styles.cell_green}
      />
      <TableCell>
        <CustomButton
          onClick={removeRow}
          className={styles.button_cross}
          label={<CancelIcon />}
        />
      </TableCell>
    </tr>
  );
};
