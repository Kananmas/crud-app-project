// styled-components
import styled from "styled-components";
// global components
import { IonInput, IonItem } from "@ionic/react";

export const StyledIonItem = styled(IonItem)`
  --background: none;
  --padding-start: 0;
  --inner-padding-end: 0;
  --highlight-background:var(--ion-color-orange);
  margin: 10px 0;
`;

export const StylesIonInput = styled(IonInput)`
  --background: #2e271a;
  --highlight-color-focused: #ff4c01;
  --padding-start: 8px !important;
  --padding-top: 16px;
  --padding-bottom: 16px;
  border-radius: 16px;
`;
