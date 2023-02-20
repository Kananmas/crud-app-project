// styles
import { StyledIonText, StyledSlideWrapper } from "./index.styled";

export function Slide(props) {
  return (
    <StyledSlideWrapper>
      <StyledIonText>{props.children}</StyledIonText>
    </StyledSlideWrapper>
  );
}
