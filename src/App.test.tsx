import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
 
const server = setupServer(
  rest.get('https://swapi.dev/api/people/1/', (req, res, ctx) => {
    return res(ctx.json({name:'Luke Skywalker'}))
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders star war heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/star wars/i);
  expect(linkElement).toBeInTheDocument();
});

test('loads and displays the first person Name', async () => {
  render(<App />);
  await waitFor(() => screen.findByText(/Luke Skywalker/i));
  expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
})
