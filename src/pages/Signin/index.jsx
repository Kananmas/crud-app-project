// components
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// global components

import { Link, useHistory } from "react-router-dom";

// hooks

import { useEffect, useState } from "react";
import { useIonAlert } from "@ionic/react";

// utils

import { getUser } from "./utils/get-user.util";
import { signInUser } from "./utils/sign-in-user.util";

export function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      History.push("/slider");
    }
  }, []);

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
      signInUser(email, password).then((data) => {
        if (data) {
          getUser(email);
          History.push("/slider");
        }
      });
    }
  };

  return (
    <div className="container">
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
      <div>
        <Link className="orange" to="/signup">
          don't have an account? sign up
        </Link>
      </div>
    </div>
  );
}
