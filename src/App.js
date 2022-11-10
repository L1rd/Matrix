import { useState } from "react";
import { Matrix } from "./components/MatrixBlock";
import { MatrixForm } from "./components/MatrixForm";
import styles from "./index.scss";

function App() {
  const [data, setData] = useState([]);
  
  const [settings, setSettings] = useState({
    rows: 0,
    columns: 0,
    cells: 0,
  });

  const handleSetMatrix = (data) => setData(data);

  return (
    <div className={styles.app}>
      <MatrixForm
        data={data}
        onSetData={handleSetMatrix}
        settings={settings}
        onSetSettings={setSettings}
      />
      <Matrix
        data={data}
        settings={settings}
        onSetData={handleSetMatrix}
      />
    </div>
  );
}

export default App;
