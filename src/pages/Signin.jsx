import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { getUser } from "../utils/get-user.utils";
import { signInUser } from "../utils/sign-in-user.util";
import "./style.css";

export default function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();

  const goToQuiz = () => {
    History.push("/quiz");
  };

  useEffect(() => {
    if (!!localStorage.getItem("initialized")) {
      goToQuiz();
    }
  }, []);

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSignIn = () => {
    if (!password.length || !email.length) {
      alert("please enter fill all the fields");
    } else {
      signInUser(email, password).then(() => {
        if (!localStorage.getItem("initailized")) {
          localStorage.setItem("initialized", "true");
        }
        getUser(email);
        goToQuiz();
      });

      signInUser();
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
