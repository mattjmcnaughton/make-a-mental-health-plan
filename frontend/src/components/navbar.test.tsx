import React from "react";
import { cleanup, render } from "@testing-library/react";
import Navbar from "./navbar";
import { BrowserRouter, Switch } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("renders Navbar component", () => {
  // TODO: The navbar should be able to use a generic url map...
  const testUrlMap = {
    aboutUrl: "/about",
    createMentalHealthPlanUrl: "/create-mental-health-plan",
    homeUrl: "/",
  };

  const TestApp = (
    <BrowserRouter>
      <div>
        <Navbar urlMap={testUrlMap} />
        <Switch></Switch>
      </div>
    </BrowserRouter>
  );
  const testApp = render(TestApp);
  expect(testApp.getByTestId("navbar")).toBeInTheDocument();
});

// TODO: Add tests relating to actually interacting w/ the UI of this component.
