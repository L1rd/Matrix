import styles from "./CustomInput.module.scss";

export const CustomInput = ({ type, onChange, name }) => (
  <input
    type={type}
    onChange={onChange}
    name={name}
    className={styles.input}
  />
);
