import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders Elano text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Elano - Made with ❤️/i);
    expect(document.body.contains(linkElement));
  });
});
