import { useDispatch } from "react-redux";
import { SettingsItem } from "../SettingsItem";
import { CustomButton } from "../shared/CustomButton";
import styles from "./MatrixForm.module.scss";

export const MatrixForm = () => {
  const dispatch = useDispatch();
  const handleCreateMatrix = () => dispatch({ type: "CREATE_MATRIX" });

  const handleSetSettings = (event) => {
    const { value, name } = event.target;
    dispatch({ type: "SET_SETTINGS", payload: { value, name } });
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Matrix Builder</h1>
      <SettingsItem
        type="number"
        name="columns"
        title="Enter the number of columns"
        onChange={(e) => handleSetSettings(e)}
      />
      <SettingsItem
        type="number"
        name="rows"
        title="Enter the number of rows"
        onChange={handleSetSettings}
      />
      <SettingsItem
        type="number"
        name="cells"
        title="Enter the number of cells"
        onChange={handleSetSettings}
      />
      <CustomButton onClick={handleCreateMatrix} label="Create matrix" />
    </div>
  );
};
