import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInUser } from "../utils/sign-in-user.util";

export default function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const History = useHistory();

  const ChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const HandleSignIn = () => {
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
    <>
      <label>Email:</label>
      <div>
        <input type="Email" onChange={ChangeEmail} />
      </div>
      <label>Password:</label>
      <div>
        <input type="password" onChange={ChangePassword} />
      </div>

      <input type="button" value="Sign in" onClick={HandleSignIn} />

      <div>
        <Link to="/signup">don't have an account? sign up</Link>
      </div>
    </>
  );
}
