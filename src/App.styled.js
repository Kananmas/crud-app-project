// styled-components
import styled from "styled-components";
// global components
import { IonPage, IonContent } from "@ionic/react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";


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
  margin-top: 14px;
`;

export const StyledPageButtons = styled.div`
  text-align: center;
  margin-top: 2%;
  padding: 0%;
`;




export const StyledHomeIcon = styled(AiOutlineHome)`
    font-size:32px;
`

export const StyledBackIcon = styled(BsArrowLeft)`
    font-size:32px;
`

