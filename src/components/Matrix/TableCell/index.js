import classnames from "classnames";
import styles from "./TableCell.module.scss";
import { useDispatch, useSelector } from "react-redux";

export const TableCell = ({
  children,
  data,
  item,
  style,
  findClosestIds,
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { isHover } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleEnter = (event) => {
    if (!isHover & +event.target.innerHTML === item?.amount) {
      dispatch({ type: "HOVER_CELL", payload: true });
      findClosestIds();
    } else if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleLeave = (event) => {
    if (!onMouseLeave) {
      dispatch({ type: "HOVER_CELL", payload: false })
      dispatch({ type: "CLEAR_CLOSEST_ID", payload: [] })
    } else {
      onMouseLeave();
    }
  };

  return (
    <td
      className={classnames(styles.cell, className, {
        [styles.cell_red]: isHover,
      })}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={style}
    >
      {data || children}
    </td>
  );
};
