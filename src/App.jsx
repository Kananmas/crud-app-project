import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// Pages
import { Quiz } from "./pages/Quiz";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

// Redux
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

import "./App.css";
import { Slider } from "./pages/Slider";
import { Result } from "./pages/Result";

setupIonicReact();
export function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Provider store={store}>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/slider">
              <Slider />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
            <Route exact path="/result">
              <Result />
            </Route>
            <Route exact path="/">
              <Redirect to="/signup" />
            </Route>
          </Provider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
