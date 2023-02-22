// global components
import {
  IonButtons,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonFooter,
} from "@ionic/react";
import { close, logOutOutline, moon, person } from "ionicons/icons";
// hooks
import { useRef, useState } from "react";
// styles
import {
  StyledCloseIonButton,
  StyledIonButton,
  StyledIonContent,
  StyledIonIcon,
  StyledIonImg,
  StyledIonItem,
  StyledIonList,
  StyledIonModal,
  StyledIonThumbnail,
  StyledIonToggle,
  StyledIonToolbar,
} from "./index.styled";
// assets
import img from "./assets/images/game-icon1.png";
// utils
import { darkModeHandler } from "./utils/dark-mode-handler.util";

export function Menu() {
  const modal = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  function dismiss() {
    modal.current?.dismiss();
  }

  function darkModeToggler() {
    darkModeHandler();
    setDarkMode(!darkMode);
  }

  function OnClickLogOut() {
    localStorage.clear();
    dismiss();
  }
  return (
    <>
      <StyledIonButton id="open-modal" fill="clear" size="large">
        <StyledIonImg src={`${img}`} alt="menu icon"></StyledIonImg>
      </StyledIonButton>
      <StyledIonModal ref={modal} trigger="open-modal">
        <StyledIonContent>
          <StyledIonToolbar>
            <IonTitle>Menu</IonTitle>
            <IonButtons slot="end">
              <StyledCloseIonButton onClick={() => dismiss()}>
                <IonIcon icon={close}></IonIcon>
              </StyledCloseIonButton>
            </IonButtons>
          </StyledIonToolbar>
          <IonList>
            <IonItem routerLink="/slider">
              <IonLabel>
                <h2>Home</h2>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/quiz">
              <IonLabel>
                <h2>Result</h2>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/previousrecords">
              <IonLabel>
                <h2>Previous Results</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        </StyledIonContent>
        <IonFooter>
          <StyledIonList>
            <StyledIonItem>
              <StyledIonThumbnail slot="start">
                <StyledIonIcon icon={moon} />
              </StyledIonThumbnail>
              <IonLabel>Dark Mode</IonLabel>
              <StyledIonToggle
                slot="end"
                name="darkMode"
                checked={darkMode}
                color="dark"
                onIonChange={darkModeToggler}
              />
            </StyledIonItem>
            <StyledIonItem>
              <StyledIonThumbnail slot="start">
                <StyledIonIcon icon={person}></StyledIonIcon>
              </StyledIonThumbnail>
              <IonLabel>{localStorage.getItem("username")}</IonLabel>
              <StyledIonThumbnail slot="end">
                <StyledIonIcon
                  onClick={OnClickLogOut}
                  icon={logOutOutline}
                ></StyledIonIcon>
              </StyledIonThumbnail>
            </StyledIonItem>
          </StyledIonList>
        </IonFooter>
      </StyledIonModal>
    </>
  );
}
