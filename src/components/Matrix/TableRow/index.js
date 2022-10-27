import CancelIcon from "@mui/icons-material/Cancel";
import { TableCell } from "../TableCell";
import { CustomButton } from "../../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  CLEAR_CLOSEST_ID,
  INCREASE_AMOUNT,
  REMOVE_ROW,
  SET_CLOSEST_ID,
} from "../../../reducer/actions/matrix.actions";

export const TableRow = ({ row, index, styles }) => {
  const dispatch = useDispatch();

  const [isHoverSum, setIsHoverSum] = useState(false);

  const { matrix, closestCellIds } = useSelector((state) => state);

  const sumRow = row.reduce((sum, current) => sum + current.amount, 0);

  const removeMatrixRow = () =>
    dispatch(
      REMOVE_ROW(matrix.filter((item) => matrix.indexOf(item) !== index))
    );

  const getPersentOfCell = (item) => Math.round((100 * item.amount) / sumRow);

  return (
    <tr>
      <TableCell data={index + 1} />
      {row.map((item, index) => (
        <TableCell
          key={item.id}
          item={item}
          onMouseEnter={() => dispatch(SET_CLOSEST_ID(item))}
          onMouseLeave={() => dispatch(CLEAR_CLOSEST_ID())}
          data={isHoverSum ? `${getPersentOfCell(item)}%` : item.amount}
          className={closestCellIds?.includes(item.id) && styles.cell_yellow}
          onClick={() => dispatch(INCREASE_AMOUNT(item))}
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
          onClick={removeMatrixRow}
          className={styles.button_cross}
          label={<CancelIcon />}
        />
      </TableCell>
    </tr>
  );
};
