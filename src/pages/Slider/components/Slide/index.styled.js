// styled-components
import styled from "styled-components";
// global components
import { IonText } from "@ionic/react";

export const StyledSlideWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  min-height: 56vh;
`;

export const StyledIonText = styled(IonText)`
  position: absolute;
  bottom: 0;
  color: #fff;
  text-align: left;
  left: 15%;
`;