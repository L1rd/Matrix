import classnames from "classnames";
import styles from "./TableCell.module.scss";
import { useState } from "react";

export const TableCell = ({
  children,
  data,
  style,
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHoverCell, setIsHoverCell] = useState(false);

  const handleMouseEnter = () => {
    setIsHoverCell(true);
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    setIsHoverCell(false);
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <td
      className={classnames(styles.cell, className, {
        [styles.cell_red]: isHoverCell,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
    >
      {data || children}
    </td>
  );
};
