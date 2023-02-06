import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "../components/Input";
import { signUpUser } from "../utils/sign-up-user.util";
import { Button } from "../components/Button";
import { useIonAlert } from "@ionic/react";

import { addNewUser } from "../utils/add-new-user.utlil";
import "./style.css";

export default function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();

  const [presentAlert] = useIonAlert();

  const goToQuiz = () => {
    History.push("/quiz");
  };

  useEffect(() => {
    if (!!localStorage.getItem("initialized")) {
      goToQuiz();
    }
  }, []);

  const handlerChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const HandleSignUp = () => {
    if (!username.length || !password.length || !email.length) {
      presentAlert({
        header: "Alert",
        message: "please enter fill all the fields",
        buttons: ["OK"],
      });
    } else {
      signUpUser(email, password).then(() => {
        localStorage.setItem("initialized", "true");

        addNewUser(username, email);
        goToQuiz();
      });
    }
  };

  return (
    <div className="container">
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
      <div>
        <Link className="orange" to="/signin">
          {" "}
          already have an account{" "}
        </Link>
      </div>
    </div>
  );
}
