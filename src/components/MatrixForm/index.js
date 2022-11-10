import { createMatrixRow } from "../../utils/helpers/create-matrix-row";
import { SettingsItem } from "../SettingsItem";
import { CustomButton } from "../shared/CustomButton";
import styles from "./MatrixForm.module.scss";

export const MatrixForm = ({ onSetData, settings, onSetSettings }) => {
  const handleCreateMatrix = () => {
    const matrix = Array(settings.rows)
      .fill()
      .map(() => createMatrixRow(settings.columns));
      onSetData(matrix);
  };

  const handleSetSettings = (event) => {
    const { value, name } = event.target;
    onSetSettings({ ...settings, [name]: +value <= 0 ? 0 : +value });
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Matrix Builder</h1>
      <SettingsItem
        type="number"
        name="columns"
        title="Enter the number of columns"
        onChange={handleSetSettings}
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
