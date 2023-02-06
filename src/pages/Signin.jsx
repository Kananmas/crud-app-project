import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { signInUser } from "../utils/sign-in-user.util";
import "./style.css";

export default function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();

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
        History.push("/quiz");
      });

      signInUser();
    }
  };

  return (
    <div class="container">
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
