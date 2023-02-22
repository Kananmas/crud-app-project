import { render, screen } from "@testing-library/react";
import { Result } from ".";

// redux
import { Provider } from "react-redux";
import { store } from "../../store";
//ionic
import { IonReactRouter } from "@ionic/react-router";

describe("Result", () => {
  it("render Result component", () => {
    render(
      <IonReactRouter>
        <Provider store={store}>
          <Result />
        </Provider>
      </IonReactRouter>
    );
    
  });
});
