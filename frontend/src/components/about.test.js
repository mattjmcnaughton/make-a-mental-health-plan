import React from "react";
import { cleanup, render } from "@testing-library/react";

import About from "./about";

afterEach(() => {
  cleanup();
});

test("renders About component", () => {
  const component = render(<About />);
  expect(component.getByTestId("about-container")).toBeInTheDocument();
});
