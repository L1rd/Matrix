import { TableCell } from "../TableCell";

export const MatrixAverage = ({ data, styles }) => {
  const avgSumArray = data[0].map((_, index) =>
    data.map((item) => item[index]).reduce((sum, curr) => sum + curr.amount, 0)
  );

  const avgOfSumColumn = Math.round(
    avgSumArray.reduce((acc, curr) => acc + curr) / data.length
  );

  return (
    <tr>
      <TableCell data="Avg" />
      {avgSumArray.map((el, index) => (
        <TableCell
          key={`${el}+${index}`}
          data={Math.round(el / data.length)}
          className={styles}
        />
      ))}
      <TableCell className={styles} data={avgOfSumColumn} />
    </tr>
  );
};
