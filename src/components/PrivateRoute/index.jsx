import { Redirect } from "react-router";
import { Route } from "react-router";

export function PrivateRoute({ path, children }) {
  const username = !!localStorage.getItem("username");

  if (username) {
    return (
      <Route exact path={path}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/signup" />;
  }
}
