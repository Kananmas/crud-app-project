import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getUser } from "../utils/get-user.utils";
import { signInUser } from "../utils/sign-in-user.util";

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
