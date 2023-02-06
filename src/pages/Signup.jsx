import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { addNewUser } from "../utils/add-new-user.utlil";
import { signUpUser } from "../utils/sign-up-user.util";

export default function Signup() {
  let [username, setUsername] = useState("");
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

  const ChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const ChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const HandleSignUp = () => {
    if (!username.length || !password.length || !email.length) {
      alert("please enter fill all the fields");
    } else {
      signUpUser(email, password, username).then(() => {
        localStorage.setItem("initialized", "true");

        addNewUser(username, email);
        goToQuiz();
      });
    }
  };

  return (
    <>
      <label>Username:</label>
      <div>
        <input type="text" onChange={ChangeUsername} />
      </div>
      <label>Password:</label>
      <div>
        <input type="password" onChange={ChangePassword} />
      </div>
      <label>Email:</label>
      <div>
        <input type="Email" onChange={ChangeEmail} />
      </div>

      <input type="button" value="Sign up" onClick={HandleSignUp} />
      <div>
        <Link to="/signin"> already have an account </Link>
      </div>
    </>
  );
}
