import { useState } from "react";
import classnames from "classnames";
import styles from "./TableCell.module.scss";

export const TableCell = ({
  children,
  data,
  style,
  onClick,
  findClosestIds,
  className,
  onMouseEnter,
  onMouseLeave,
  onSetClosestCellIds,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    if (findClosestIds) {
      setIsHover(true);
      findClosestIds();
    } else if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleLeave = () => {
    if (onSetClosestCellIds) {
      setIsHover(false);
      onSetClosestCellIds([]);
    } else if (onMouseLeave) {
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
