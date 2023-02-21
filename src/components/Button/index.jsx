// global components
import { IonButton } from "@ionic/react";
// styles
import "./style.css";
export function Button(props) {
  return (
    <IonButton color="orange" onClick={props.onClick} className="customButton">
      {props.children}
    </IonButton>
  );
}
