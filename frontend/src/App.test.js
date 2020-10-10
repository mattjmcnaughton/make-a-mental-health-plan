import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup, fireEvent, render, screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createMemoryHistory } from 'history';

const server = setupServer(
  rest.post('/plans', (req, res, ctx) => {
    return res(ctx.json({test: 'hi'}));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
}); 
afterAll(() => server.close());

test('renders app', () => {
  const app = render(<App />);
  expect(app.getByTestId("home-container")).toBeInTheDocument();
});

test('router correct routes to different paths', () => {
  const history = createMemoryHistory();
  const routesToTestId = new Map([
    ["/home", "home-container"],
    ["/about", "about-container"],
    ["/create-mental-health-plan", "create-mental-health-plan-container"]
  ]);

  routesToTestId.forEach((testId, route) => {
    history.push(route);

    const app = render(<App history={history}/>);

    expect(app.getByTestId(testId)).toBeInTheDocument();
  });
});