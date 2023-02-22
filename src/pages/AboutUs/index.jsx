import { IonButton, IonContent, IonText } from "@ionic/react";
import { useHistory } from "react-router";
import {
  StyledHolder,
  StyledContainer,
  StyledTextHolder,
  StyledTitle,
  StyledLinkedInIcon,
  LinksText,
  ButtonHolder,
} from "./index.styled";

export function AboutUs() {
  const History = useHistory();

  function HandleOnClickBack() {
    History.go(-1);
  }

  return (
    <IonContent>
      <StyledHolder>
        <StyledContainer>
          <h4>About Misspelle</h4>
          <h6>A-TEAM</h6>
          <h6>V.1.0.7</h6>
          <br />{" "}
          <IonText>
            This project is done with the efforts of all memebers of the A-team
            and we are all greatful to them for their passion and working
            etheics, in this project:
          </IonText>
        </StyledContainer>
        <StyledTextHolder>
          <br />{" "}
          <StyledTitle>
            {" "}
            <LinksText href="https://www.linkedin.com/in/kanan-mas-a75925254/">
              Kanan Masajedi
            </LinksText>
            <StyledLinkedInIcon />
          </StyledTitle>{" "}
          Leader of project and responsible for the logic of project <br />{" "}
          <StyledTitle>
            {" "}
            <LinksText href="https://www.linkedin.com/in/hamid-shokatinia">
              Hamid Shokatinia
            </LinksText>
            <StyledLinkedInIcon />
          </StyledTitle>{" "}
          responsible for redux-saga and unit testing <br />{" "}
          <StyledTitle>
            {" "}
            <LinksText>Zahra Mohseni</LinksText>
            <StyledLinkedInIcon />
          </StyledTitle>
          responsible for creating the UI and UX and writing end to end tests
          for project
          <br />
          <StyledTitle>
            {" "}
            <LinksText>Somaye Baniasadi</LinksText>
            <StyledLinkedInIcon />
          </StyledTitle>{" "}
          responsible for UI and UX creation of the Previous Records page and
          question page
          <br />
          <StyledTitle>
            {" "}
            <LinksText>Mahdi Fallahi</LinksText>
            <StyledLinkedInIcon />
          </StyledTitle>{" "}
          responsible for UI and UX design of the result and past result page
          and creating pie chart
          <br />
          <StyledTitle>
            {" "}
            <LinksText>Mohammad Afshar</LinksText>
            <StyledLinkedInIcon />
          </StyledTitle>{" "}
          responsible for creating UI and UX of the sign in and sign up page
          <ButtonHolder>
            <IonButton
              color="danger"
              fill="outline"
              onClick={HandleOnClickBack}
            >
              Back
            </IonButton>
          </ButtonHolder>
        </StyledTextHolder>
      </StyledHolder>
    </IonContent>
  );
}
