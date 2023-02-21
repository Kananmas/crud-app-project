// global components
import { IonSpinner } from "@ionic/react";
// styled-components
import styled from "styled-components";

export const StyledSpinner = styled.div`
  width: 90%;
  position: absolute;
  left: 5%;
  right: 5%;
  text-align: center;
  top: 50%;
  bottom: 50%;
`;

export const StyledIonSpinner = styled(IonSpinner)`
  transform: scale(2);
`;
