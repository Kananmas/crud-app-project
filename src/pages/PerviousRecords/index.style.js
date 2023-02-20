import { IonText, IonButton } from "@ionic/react";
import styled from "styled-components";

export const StyledIonText = styled(IonText)`
font-size:22px;
font-weight:bold;
color:white;
`;


export const PageButtons = styled.div`
text-align: center;
  margin-top: 2%;
  padding: 0% 14%;
`

export const ResultContainer = styled.div`
color: white;
text-align: center;
padding: 0% 4%;
`


export const StyledIonButton = styled(IonButton)`
display: block;
  margin: 15px auto;
  width: 80%;
  height: 60px;
  font-weight: 700;
  --background: #262424;
  --box-shadow: none;
  --border-radius: 16px;
`;