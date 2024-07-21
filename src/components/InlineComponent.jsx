import '../css/style.css';
import styles from './inlinecomponent.module.css';

const internalComp = { color: "green", fontSize: "51px" }
export default function InlineComponent(){
    return (
        <>
          <h1 className={styles.header}>External Component! External CSS!</h1>
          <h1 className='inline-header'>External Component! Internal CSS!</h1>
          <h1 style={{ color: "blue", fontSize: "91px" }}>Inline Component! Inline CSS!</h1>
          <h2 style={internalComp}>Internal CSS!</h2>
        </>
    )
}