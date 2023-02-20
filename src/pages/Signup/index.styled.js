// styled-components
import styled from "styled-components";
// global components
import { IonPage, IonContent } from "@ionic/react";
import { Link } from "react-router-dom";

export const StyledIonPage = styled(IonPage)`
  background-color: #191a1f;
`;

export const StyledIonContent = styled(IonContent)`
  --background: transparent;
  color: white;
`;

export const StyledContainer = styled.div`
  padding: 16px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: #ff4c01;
  margin-top: 16px;
`;