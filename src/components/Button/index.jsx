import { IonButton } from "@ionic/react";

export function Button(props) {
  return (
    <IonButton color="orange" onClick={props.onClick}>
      {props.children}
    </IonButton>
  );
}
