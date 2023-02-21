// styles
import { StyledIonButton } from "./index.styled.js";

export function Button(props) {
  return (
    <StyledIonButton color="orange" onClick={props.onClick} className="customButton">
      {props.children}
    </StyledIonButton>
  );
}
