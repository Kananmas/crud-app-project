// hooks
import { useState } from "react";
import { useIonAlert } from "@ionic/react";
// components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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
  setUserNameAction,
  signUpUserAction,
} from "../../store/user/user.actions";

export function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [presentAlert] = useIonAlert();

  // handles username changes
  const handlerChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  // handles password changes
  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // handles email changes
  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  //handles sign up
  const HandleSignUp = () => {
    if (!username.length || !password.length || !email.length) {
      presentAlert({
        header: "Alert",
        message: "please enter fill all the fields",
        buttons: ["OK"],
      });
    } else {
      // sets username,email,password to redux store
      dispatch(setUserNameAction(username));
      dispatch(setEmailAction(email));
      dispatch(setPasswordAction(password));
      // this is a saga action that will handle sign in for us
      dispatch(signUpUserAction());
    }
  };

  return (
    <StyledIonPage>
      <StyledIonContent>
        <StyledContainer>
          <Input
            color="orange"
            placeholder="User Name"
            type="text"
            value={username}
            onChange={handlerChangeUsername}
          />
          <Input
            color="orange"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlerChangePassword}
          />
          <Input
            color="orange"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handlerChangeEmail}
          />

          <Button onClick={HandleSignUp}>Sign up</Button>
          <StyledLink to="/signin">already have an account?</StyledLink>
        </StyledContainer>
      </StyledIonContent>
    </StyledIonPage>
  );
}
