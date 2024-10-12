import classNames from "classnames/bind";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("container")}>
      <div>초기세팅 중입니다.</div>
      <button>새롭게 시작!</button>
    </div>
  );
}

export default App;
