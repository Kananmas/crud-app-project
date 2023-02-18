import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";

export function ProtectedRoute({ path, children }) {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      setCondition(false);
    } else {
      setCondition(true);
    }
  }, [localStorage.getItem("username")]);

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
