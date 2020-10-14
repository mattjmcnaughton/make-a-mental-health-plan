import React from "react";
import { cleanup, render } from "@testing-library/react";

import Home from "./home";

afterEach(() => {
  cleanup();
});

test("renders Home component", () => {
  const component = render(<Home />);
  expect(component.getByTestId("home-container")).toBeInTheDocument();
});
