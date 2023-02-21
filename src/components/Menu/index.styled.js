// styled-components
import styled from "styled-components";
// global components
import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonModal,
  IonThumbnail,
  IonToggle,
  IonToolbar,
} from "@ionic/react";

export const StyledIonButton = styled(IonButton)`
  position: relative;
  width: max-content;
  left: 10%;
  top: 25px;
  padding: 5px;
  margin-bottom: 16px;
`;

export const StyledIonImg = styled(IonImg)`
  height: 95%;
  filter: drop-shadow(0 0 1px #6e6e6e);
`;

export const StyledIonModal = styled(IonModal)`
  --width: 96%;
  --height: 50%;
  --border-radius: 16px;
  &::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }
`;

export const StyledIonContent = styled(IonContent)`
  --padding-top: 16px;
  --padding-bottom: 16px;
  --padding-start: 16px;
  --padding-end: 16px;
  border-radius: 16px;
`;

export const StyledIonToolbar = styled(IonToolbar)`
  border-radius: 16px;
  --background: #ff4c01;
  --color: white;
  margin-bottom: 16px;
`;

export const StyledCloseIonButton = styled(IonButton)`
  --border-radius: 10px !important;
  --background: #191a1f !important;
`;

export const StyledIonList = styled(IonList)`
  background-color: unset;
`;

export const StyledIonItem = styled(IonItem)`
  --background: unset;
`;

export const StyledIonThumbnail = styled(IonThumbnail)`
  padding: 10px;
`;

export const StyledIonIcon = styled(IonIcon)`
  width: 100%;
  height: 100%;
`;

export const StyledIonToggle = styled(IonToggle)`
  height: 10px;
  width: 65px;
  padding: 12px;
  --handle-width: 25px;
  --handle-height: 25px;
  --handle-max-height: auto;
  --handle-spacing: 6px;
  --handle-border-radius: 7px;
  --handle-box-shadow: none;
  --handle-background: currentcolor;
  /* Required for iOS handle to overflow the height of the track */
  overflow: visible;
  contain: none;
`;