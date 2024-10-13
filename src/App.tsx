import classNames from "classnames/bind";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("container")}>
      <nav className={cx("wrap-nav")}>
        <h1 className={cx("pagename")}>SIK-K</h1>
        <ul className={cx("wrap-list")}>
          <li className={cx("list-item")}>1</li>
          <li className={cx("list-item")}>2</li>
          <li className={cx("list-item")}>3</li>
        </ul>
      </nav>
      <div className={cx("iframe-container")}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2SslHKdy2vM?autoplay=1&mute=1&si=HaLZI2zhWmTz3bZR&amp;controls=0"
          title="SIK-K TRAP"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
