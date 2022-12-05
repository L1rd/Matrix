import { useSelector } from "react-redux";
import { getMatrixColumnsSelector} from "../../../matrix-services/selectors";
import { TableCell } from "../TableCell";

const getHeadings = (columns) =>
  Array(columns)
    .fill(0)
    .map((_, index) => index + 1);

export const TableHead = () => {
  const columns = useSelector(getMatrixColumnsSelector);

  const headings = getHeadings(columns);

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
