// styles
import { StyledIonSpinner, StyledSpinner } from "./index.styled";

export function LoadingSpinner() {
  return (
    <StyledSpinner className="spinner">
      <StyledIonSpinner name="circular" color="orange"></StyledIonSpinner>
    </StyledSpinner>
  );
}