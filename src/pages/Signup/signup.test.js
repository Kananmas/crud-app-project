import { Signup } from ".";
import { render, screen } from "@testing-library/react";

// redux
import { store } from "../../store";
import { Provider } from "react-redux";
//ionic
import { IonReactRouter } from "@ionic/react-router";

describe("SignUp", () => {
  it("render signup component", () => {
    render(
      <IonReactRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </IonReactRouter>
    );
    expect(screen.getByPlaceholderText("User Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
    expect(screen.getByText("already have an account?")).toBeInTheDocument();
    
  });
});
