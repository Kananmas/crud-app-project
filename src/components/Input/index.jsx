// global components
import { IonItem } from "@ionic/react";
// styles
import { StylesIonInput } from "./index.styled";

export function Input(props) {
  return (
    <IonItem class="custom">
      <StylesIonInput
        color={props.color}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onIonChange={props.onChange}
      ></StylesIonInput>
    </IonItem>
  );
}
