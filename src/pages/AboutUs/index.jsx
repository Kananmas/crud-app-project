import { IonContent, IonText } from "@ionic/react";
import { StyledIonText } from "../PerviousRecords/index.styled";
import {
  StyledHolder,
  StyledContainer,
  StyledTextHolder,
} from "./index.styled";

export function AboutUs() {
  return (
    <IonContent>
      <StyledHolder>
        <StyledContainer>
          <h4>About Misspelle</h4>
          <h6>A-TEAM</h6>
          <br />{" "}
          <IonText>
            This project is done with the efforts of all memebers of the A-team
            and we are all greatful to them for their passion and Their working
            etheics, in this project:
          </IonText>
        </StyledContainer>
        <StyledTextHolder>
          <br /> <h3>Kanan Masajedi :</h3> Leader of project and responsible for
          the logic of project <br /> <h3> Hamid Shokatinia:</h3> responsible
          for redux-saga and unit testing <br /> <h3> Zahra Mohseni:</h3>
          responsible for creating the UI and UX and writing end to end tests
          for project
          <br />
          <h3> Somaye Baniasadi:</h3> responsible for UI and UX creation of the
          Previous Records page and question page
          <br /> <h3>Mahdi Fallahi :</h3> responsible for UI and UX design of
          the result and past result page and creating pie chart
          <br />
          <h3> Mohammad Afshar:</h3> responsible for creating UI and UX of the
          sign in and sign up page
        </StyledTextHolder>
      </StyledHolder>
    </IonContent>
  );
}
