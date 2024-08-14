import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <h2>hello from h2 Info</h2>
      <button className="my-button">Click me in the info component</button>
      <button className={styles.myOtherButton}>Other button</button>
    </div>
  );
}
export default Info;
