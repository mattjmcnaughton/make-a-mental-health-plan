import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";

afterEach(() => {
  cleanup();
});

test("renders App component", () => {
  const app = render(<App />);
  expect(app.getByTestId("home-container")).toBeInTheDocument();
});

// for now, the `router` is part of the `App` component... that may not always be the case.
test("router correctly routes", () => {
  const history = createMemoryHistory();
  const routesToTestId = new Map([
    ["/home", "home-container"],
    ["/about", "about-container"],
    ["/create-mental-health-plan", "create-mental-health-plan-container"],
  ]);

  routesToTestId.forEach((testId, route) => {
    history.push(route);

    const app = render(<App history={history} />);

    expect(app.getByTestId(testId)).toBeInTheDocument();
  });
});
