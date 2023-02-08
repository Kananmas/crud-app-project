// global components
import { IonText } from "@ionic/react";
// styles
import styles from "./index.module.css";

export function Slide(props) {
  return (
    <div className={styles.slideWrapper}>
      <IonText className={styles.slideContent}>{props.children}</IonText>
    </div>
  );
}
