import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { TableCell } from "../TableCell";
import { CustomButton } from "../../shared/CustomButton";

export const TableRow = ({
  row,
  closestCellsCount,
  index,
  styles,
  matrix,
  onSetData,
  closestCellIds,
  onSetClosestCellIds,
}) => {
  const [isHoverSum, setIsHoverSum] = useState(false);

  const sumRow = row.reduce((sum, current) => sum + current.amount, 0);

  const removeMatrixRow = () =>
    onSetData(matrix.filter((item) => matrix.indexOf(item) !== index));

  const getPersentOfCell = (item) => Math.round((100 * item.amount) / sumRow);

  const findClosestIds = (data) => {
    const closestIds = matrix
      .flat()
      .filter((item) => data.id !== item.id)
      .sort(
        (a, b) =>
          Math.abs(a.amount - data.amount) - Math.abs(b.amount - data.amount)
      )
      .slice(0, closestCellsCount)
      .map((item) => item.id);
    onSetClosestCellIds(closestIds);
  };
  
  const handleIncreaseAmount = (cell) =>
    matrix.map((row) =>
      row.map((item) => {
        const increase = () => {
          item.amount += 1;
          return item;
        };
        return item.id === cell.id ? increase() : item;
      })
    );

  const handleSetIncreaseAmount = (item) =>
    onSetData(handleIncreaseAmount(item));

  return (
    <tr>
      <TableCell data={index + 1} />
      {row.map((item, index) => (
        <TableCell
          key={item.id}
          findClosestIds={() => findClosestIds(item)}
          data={isHoverSum ? `${getPersentOfCell(item)}%` : item.amount}
          className={closestCellIds?.includes(item.id) && styles.cell_yellow}
          onClick={() => handleSetIncreaseAmount(item)}
          onSetClosestCellIds={onSetClosestCellIds}
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
