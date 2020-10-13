import React from "react";
import { cleanup, render } from '@testing-library/react';

import CreateMentalHealthPlan from "./createMentalHealthPlan";

afterEach(() => {
  cleanup();
}); 

test('renders CreateMentalHealthPlan component', () => {
  const component = render(<CreateMentalHealthPlan />);
  expect(component.getByTestId("create-mental-health-plan-container")).toBeInTheDocument();
});