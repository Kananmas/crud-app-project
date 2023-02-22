import { render, screen } from "@testing-library/react";
import { Signin } from ".";

// redux
import { Provider } from "react-redux";
import { store } from "../../store";
//ionic
import { IonReactRouter } from "@ionic/react-router";

describe("signin", () => {
  it("render signin component", () => {
    render(
      <IonReactRouter>
        <Provider store={store}>
          <Signin />
        </Provider>
      </IonReactRouter>
    );
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("don't have an account? sign up")).toBeInTheDocument();
    
  });
});
