import { render, screen } from "@testing-library/react";
import { PastResult } from ".";

// redux
import { Provider } from "react-redux";
import { store } from "../../store";
//ionic
import { IonReactRouter } from "@ionic/react-router";

describe("pasrResult", () => {
  it("render past result component", () => {
    render(
      <IonReactRouter>
        <Provider store={store}>
          <PastResult />
        </Provider>
      </IonReactRouter>
    );
  });
});
