// styled-components
import styled from "styled-components";
// global components
import { IonButton } from "@ionic/react";

export const StyledQuestionWrapper = styled.div`
  height: 100%;
  text-align: center;
  padding: 16px;
`;

export const StyledElements = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledTimer = styled(StyledElements)`
  color: yellow;
  padding: 3px;
  background-color: #404040;
  border-radius: 8px;
`;

export const StyledWordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const StyledWord = styled.h1`
  color: var(--ion-color-orange);
  text-shadow: 0 0 70px var(--ion-color-orange);
  filter: drop-shadow(0 0 50px rgb(255, 0, 0));
  font-size: 35px;
  font-weight: bold;
`;

export const StyledScoreWrapper = styled.div`
  margin-bottom: 13%;
  color: gray;
`;

export const StyledScore = styled(StyledWord)`
  color: #fff;
  font-size: 25px;
`;

export const StyledIonButton = styled(IonButton)`
  margin: 20px auto;
  width: 80%;
  height: 60px;
  font-weight: 700;
  --background: #262424;
  --box-shadow: none;
  --border-radius: 16px;
`;