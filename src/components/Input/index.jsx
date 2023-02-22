// styles
import { StyledIonItem, StylesIonInput } from "./index.styled";

export function Input(props) {
  return (
    <StyledIonItem>
      <StylesIonInput
        color={props.color}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onIonChange={props.onChange}
      ></StylesIonInput>
    </StyledIonItem>
  );
}
