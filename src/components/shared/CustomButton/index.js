import classNames from "classnames";
import styles from "./CustomButton.module.scss";

export const CustomButton = ({ label, onClick, className }) => (
  <button
    className={classNames(styles.button, className)}
    onClick={onClick}
  >
    {label}
  </button>
);
