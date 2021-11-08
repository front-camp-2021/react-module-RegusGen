import { render, screen } from '@testing-library/react';
import App from '../src/components/app/App';
import store from "./store";
import {Provider} from "react-redux";

test('renders learn react link', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>);
  const linkElement = screen.getByText('Online Store');
  expect(linkElement).toBeInTheDocument();
});
