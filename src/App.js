import { Matrix } from "./components/MatrixBlock";
import { MatrixForm } from "./components/MatrixForm";
import styles from "./index.scss";

function App() {
  return (
    <div className={styles.app}>
      <MatrixForm />
      <Matrix />
    </div>
  );
}

export default App;