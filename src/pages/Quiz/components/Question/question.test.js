import { render, screen } from "@testing-library/react";
import { Question } from ".";

// redux
import { Provider } from "react-redux";
import { store } from "../../../../store";
//ionic
import { IonReactRouter } from "@ionic/react-router";

describe("Question", () => {
  it("render question component", () => {
    render(
      <IonReactRouter>
        <Provider store={store}>
          <Question />
        </Provider>
      </IonReactRouter>
    );
    expect(screen.getByText("CORRECT")).toBeInTheDocument();
    expect(screen.getByText("WRONG")).toBeInTheDocument();
    expect(screen.getByText("SCORE")).toBeInTheDocument();
    expect(screen.getByText("Restart")).toBeInTheDocument();
    expect(screen.getByTestId('styledWord')).toBeInTheDocument();
  });
});
