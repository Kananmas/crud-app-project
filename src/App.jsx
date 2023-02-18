// global components
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// components
import { Quiz } from "./pages/Quiz";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Slider } from "./pages/Slider";
import { Result } from "./pages/Result";
// redux
import { store } from "./store";
import { Provider } from "react-redux";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
// styles
import "./App.css";
import { PreviousRecords } from "./pages/PerviousRecords";
import { PastResult } from "./pages/PastResult";
import { PrivateRoute } from "./components/PrivateRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";

setupIonicReact();
export function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Provider store={store}>
            <ProtectedRoute exact path="/signup">
              <Signup />
            </ProtectedRoute>
            <ProtectedRoute exact path="/signin">
              <Signin />
            </ProtectedRoute>
            <PrivateRoute path="/slider">
              <Slider />
            </PrivateRoute>
            <PrivateRoute exact path="/quiz">
              <Quiz />
            </PrivateRoute>
            <PrivateRoute exact path="/result">
              <Result />
            </PrivateRoute>
            <PrivateRoute exact path="/previousrecords">
              <PreviousRecords />
            </PrivateRoute>
            <PrivateRoute exact path="/pastresult">
              <PastResult />
            </PrivateRoute>
            <PrivateRoute exact path="/">
              <Redirect to="/signup" />
            </PrivateRoute>
          </Provider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
