import { Redirect, useLocation } from "react-router";
import { Route } from "react-router";

export function ProtectedRoute({ path, children }) {
  const condition = !!localStorage.getItem("username");

  if (!condition) {
    return (
      <Route exact path={path}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/slider" />;
  }
}
