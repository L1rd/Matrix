import { TableCell } from "../TableCell";

const getHeadings = (columns) =>
  Array(columns)
    .fill(0)
    .map((_, index) => index + 1);

export const TableHead = ({ columnsCount }) => {
  const headings = getHeadings(columnsCount);

  return (
    <thead>
      <tr>
        <TableCell data="№" />
        {headings.map((item, index) => (
          <TableCell key={`${item}+${index}`} data={item} />
        ))}
        <TableCell data="Sum" />
        <TableCell />
      </tr>
    </thead>
  );
};
