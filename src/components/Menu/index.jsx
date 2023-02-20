// global components
import {
  IonButtons,
  IonButton,
  IonModal,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonIcon,
  IonFooter,
  IonThumbnail,
  IonToggle,
} from "@ionic/react";
import { close, logOutOutline, moon, person } from "ionicons/icons";
// hooks
import { useRef, useState } from "react";
// styles
import styles from "./index.module.css";
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
  return (
    <>
      <IonButton
        id="open-modal"
        fill="clear"
        size="large"
        className={styles.menuButton}
      >
        <IonImg
          src={`${img}`}
          alt="menu icon"
          className={styles.menuImage}
        ></IonImg>
      </IonButton>
      <IonModal className={styles.menuModal} ref={modal} trigger="open-modal">
        <IonContent className={styles.menuContent}>
          <IonToolbar className={styles.modalHeader}>
            <IonTitle>Menu</IonTitle>
            <IonButtons slot="end">
              <IonButton
                onClick={() => dismiss()}
                className={styles.closeButton}
              >
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
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
          </IonList>
        </IonContent>
        <IonFooter>
          <IonList className={styles.bgUnset}>
            <IonItem className={styles.bgUnset}>
              <IonThumbnail className={styles.iconsWrapper} slot="start">
                <IonIcon icon={moon} className={styles.footerIcons} />
              </IonThumbnail>
              <IonLabel>Dark Mode</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                checked={darkMode}
                color="dark"
                className={styles.darkModeToggle}
                onIonChange={darkModeToggler}
              />
            </IonItem>
            <IonItem className={styles.bgUnset}>
              <IonThumbnail className={styles.iconsWrapper} slot="start">
                <IonIcon icon={person} className={styles.footerIcons}></IonIcon>
              </IonThumbnail>
              <IonLabel>{localStorage.getItem("username")}</IonLabel>
              <IonThumbnail className={styles.iconsWrapper} slot="end">
                <IonIcon
                  icon={logOutOutline}
                  className={styles.footerIcons}
                ></IonIcon>
              </IonThumbnail>
            </IonItem>
          </IonList>
        </IonFooter>
      </IonModal>
    </>
  );
}
