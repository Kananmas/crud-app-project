// global components
import {
  IonContent,
  IonPage,
  IonicSlides,
  IonButton,
  IonFooter,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Pagination, Parallax } from "swiper";
// components
import { Slide } from "./components/Slide";
import { Menu } from "../../components/Menu";
// global styles
import "@ionic/react/css/ionic-swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/parallax";
// styles
import styles from "./index.module.css";
// hooks
import { useHistory } from "react-router";

export function Slider() {
  const History = useHistory();

  function handlerOnPlay() {
    History.push("/quiz");
  }

  return (
    <IonPage className={styles.bgcolor}>
      <IonContent scrollY="false" className={styles.bgTransparent}>
        <Menu />
        <Swiper
          modules={[Keyboard, Pagination, Mousewheel, Parallax, IonicSlides]}
          keyboard={true}
          pagination={{ enabled: true }}
          mousewheel={true}
          parallax={true}
          className={styles.slider}
        >
          <SwiperSlide>
            <Slide>
              <h1 className={styles.slideTitle}>
                <span style={{ color: "#ff4c01" }}> Play</span> with
                <br />
                Friends
              </h1>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <p className={styles.slideText}>
                In this game, you will be shown 30 words daily. You have 30
                seconds to choose whether the displayed word is spelled
                correctly or not. <br />
                Each correct answer has 10 points and each wrong answer has 5
                negative points.
              </p>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <p className={styles.slideText}>
                If you don't answer, you will be directed to the next question
                without losing points. You can answer 30 more questions by
                exchanging 100 points. You can see the results of the previous
                days on the Menu.
              </p>
            </Slide>
          </SwiperSlide>
        </Swiper>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonButton
          expand="block"
          fill="solid"
          className={styles.startButton}
          onClick={handlerOnPlay}
        >
          START PLAY
        </IonButton>
        <p className={styles.howPlayTitle}>HOW TO PLAY ?</p>
      </IonFooter>
    </IonPage>
  );
}
