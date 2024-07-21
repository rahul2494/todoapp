import "../css/style.css";
import styles from "./inlinecomponent.module.css";

export default function OutlineComponent(){
    return (
        <>
          <h1 className="outline-header">This is an outline component!</h1>
          <h1 className={styles.header}>This is an outline component!</h1>
        </>
    )
}