// components
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
// global components
import { useHistory } from "react-router-dom";
// hooks
import { useEffect, useState } from "react";
import { useIonAlert } from "@ionic/react";
// styles
import {
  StyledContainer,
  StyledIonContent,
  StyledIonPage,
  StyledLink,
} from "../../App.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmailAction,
  setPasswordAction,
  signInUserAction,
} from "../../store/user/user.actions";

export function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      History.push("/slider");
    }
  }, [user.status]);

  const [presentAlert] = useIonAlert();

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSignIn = () => {
    if (!password.length || !email.length) {
      presentAlert({
        header: "Alert",
        message: "please enter fill all the fields",
        buttons: ["OK"],
      });
    } else {
      dispatch(setEmailAction(email));
      dispatch(setPasswordAction(password));
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
