// components
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
// hooks
import { useState } from "react";
import { useIonAlert } from "@ionic/react";
// styles
import {
  StyledContainer,
  StyledIonContent,
  StyledIonPage,
  StyledLink,
} from "../../App.styled";
import { useDispatch } from "react-redux";
import {
  setEmailAction,
  setPasswordAction,
  signInUserAction,
} from "../../store/user/user.actions";

export function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [presentAlert] = useIonAlert();

  //handles password change
  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  //handles email change
  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSignIn = () => {
    if (!password.length || !email.length) {
      //alerts user about empty fields
      presentAlert({
        header: "Alert",
        message: "please enter fill all the fields",
        buttons: ["OK"],
      });
    } else {
      // upon pressing the sign in button email and password would be set inside the store
      dispatch(setEmailAction(email));
      dispatch(setPasswordAction(password));
      // this is an saga action that will take care of siging in for us
      dispatch(signInUserAction());
    }
  };

  return (
    <StyledIonPage>
      <StyledIonContent>
        <StyledContainer>
          <Input
            color="orange"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handlerChangeEmail}
          />
          <Input
            color="orange"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlerChangePassword}
          />
          <Button onClick={handleSignIn}>Sign in</Button>
          <StyledLink to="/signup">don't have an account? sign up</StyledLink>
        </StyledContainer>
      </StyledIonContent>
    </StyledIonPage>
  );
}
