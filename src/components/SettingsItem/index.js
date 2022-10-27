import { CustomInput } from "../shared/CustomInput";
import styles from "./SettingsItem.module.scss";

export const SettingsItem = ({ type, onChange, title, name }) => (
  <div className={styles.wrapper}>
    <h2>{title}: </h2>
    <CustomInput
      type={type}
      onChange={onChange}
      name={name}
    />
  </div>
);
