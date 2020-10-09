import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup, fireEvent, render, screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

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
  render(<App />);
  expect(screen.getByText("make-a-mental-health-plan")).toBeInTheDocument();
});

// Eventually, should have per component testing.
test('fill in and submit form', async () => {
  const app = render(<App />);

  userEvent.type(app.getByLabelText('username'), 'hi');
  const submitButton = app.getByText('Submit');
  fireEvent.click(submitButton);

  // `findBy` supports `await`, while `getBy` does not. So its important we use `findBy`.
  await app.findByTestId("button-submitted");
  expect(app.getByText('Submit')).toBeDisabled();
});