import { useSelector } from "react-redux";
import { TableCell } from "../TableCell";

export const MatrixAverage = ({ styles }) => {
  const matrix = useSelector((state) => state.matrix);

  const avgSumArray = matrix[0].map((_, index) =>
  matrix.map((item) => item[index]).reduce((sum, curr) => sum + curr.amount, 0)
  );

  const avgOfSumColumn = Math.round(
    avgSumArray.reduce((acc, curr) => acc + curr) / matrix.length
  );

  return (
    <tr>
      <TableCell data="Avg" />
      {avgSumArray.map((el, index) => (
        <TableCell
          key={`${el}+${index}`}
          data={Math.round(el / matrix.length)}
          className={styles}
        />
      ))}
      <TableCell className={styles} data={avgOfSumColumn} />
    </tr>
  );
};
