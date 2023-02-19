// hooks
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useIonAlert } from "@ionic/react";

// components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
// global components
import { Link } from "react-router-dom";

// utils
import { addNewUser } from "./utils/add-new-user.util";
import { isUsernameUsed } from "./utils/is-username-used.util";
import { signUpUser } from "./utils/sign-up-user.util";

export function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();

  const [presentAlert] = useIonAlert();

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
      isUsernameUsed(username).then((isUnique) => {
        if (isUnique) {
          localStorage.clear();
          signUpUser(email, password).then((data) => {
            if (data) {
              addNewUser(username, email);
              History.push("/slider");
            }
          });
        } else {
          presentAlert({
            header: "Alert",
            message: "username is taken by another user please use another one",
            buttons: ["OK"],
          });
        }
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
