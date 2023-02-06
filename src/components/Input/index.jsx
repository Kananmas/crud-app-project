import { IonInput, IonItem } from "@ionic/react";
import "./style.css";
export function Input(props) {
  return (
    <IonItem class="custom">
      <IonInput
        color={props.color}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onIonChange={props.onChange}
        class="custom"
      ></IonInput>
    </IonItem>
  );
}
