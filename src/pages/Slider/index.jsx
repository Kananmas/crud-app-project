// global components
import { IonicSlides, IonFooter } from "@ionic/react";
import { SwiperSlide } from "swiper/react";
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
// hooks
import { useHistory } from "react-router";
// styles
import {
  StyledHowPlayTiltle,
  StyledIonButton,
  StyledIonContent,
  StyledIonPage,
  StyledSlideText,
  StyledSlideTitle,
  StyledSpan,
  StyledSwiper,
} from "./index.styled";

export function Slider() {
  const History = useHistory();

  function handlerOnPlay() {
    History.push("/quiz");
  }

  return (
    <StyledIonPage>
      <StyledIonContent scrollY="false">
        <Menu />
        <StyledSwiper
          modules={[Keyboard, Pagination, Mousewheel, Parallax, IonicSlides]}
          keyboard={true}
          pagination={{ enabled: true }}
          mousewheel={true}
          parallax={true}
        >
          <SwiperSlide>
            <Slide>
              <StyledSlideTitle>
                <StyledSpan> Play</StyledSpan> with
                <br />
                Friends
              </StyledSlideTitle>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <StyledSlideText>
                In this game, you will be shown 30 words daily. You have 30
                seconds to choose whether the displayed word is spelled
                correctly or not. <br />
                Each correct answer has 10 points and each wrong answer has 5
                negative points.
              </StyledSlideText>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <StyledSlideText>
                If you don't answer, you will be directed to the next question
                without losing points. You can answer 30 more questions by
                exchanging 100 points. You can see the results of the previous
                days on the Menu.
              </StyledSlideText>
            </Slide>
          </SwiperSlide>
        </StyledSwiper>
      </StyledIonContent>
      <IonFooter className="ion-no-border">
        <StyledIonButton expand="block" fill="solid" onClick={handlerOnPlay}>
          START PLAY
        </StyledIonButton>
        <StyledHowPlayTiltle>HOW TO PLAY ?</StyledHowPlayTiltle>
      </IonFooter>
    </StyledIonPage>
  );
}
