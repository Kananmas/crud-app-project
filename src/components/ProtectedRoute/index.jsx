import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";

export function ProtectedRoute({ path, children }) {
  const [username, setUsername] = useState(!!localStorage.getItem("username"));

  useEffect(() => {
    setInterval(() => {
      setUsername(!!localStorage.getItem("username"));
    }, 1000);
  }, []);

  if (!username) {
    return (
      <Route exact path={path}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/slider" />;
  }
}
