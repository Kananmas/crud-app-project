// styled-components
import styled from "styled-components";
// global components
import { IonButton } from "@ionic/react";
import { Swiper } from "swiper/react";
// assets
import image from "./assets/images/hero-section.png";

export const StyledSwiper = styled(Swiper)`
  --bullet-background-active: #ff4c01;
  --swiper-pagination-bullet-size: 10px;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  filter: drop-shadow(-20px -120px 180px #ff4c01);
`;

export const StyledSlideTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;
`;

export const StyledSpan = styled.span`
  color: #ff4c01;
`;

export const StyledSlideText = styled.p`
  width: 65%;
  font-size: 20px;
`;

export const StyledIonButton = styled(IonButton)`
  display: block;
  margin: 20px auto;
  width: 70%;
  height: 60px;
  font-weight: 700;
  --background: #ff4c01;
  --box-shadow: none;
  --border-radius: 16px;
`;

export const StyledHowPlayTiltle = styled.p`
  text-align: center;
  font-weight: 700;
  color: #fef377;
  text-shadow: 0 0 2px #fef377;
  margin-top: 36px;
  margin-bottom: 80px;
`;
