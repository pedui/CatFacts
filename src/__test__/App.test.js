import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme';

function Button(props) {
  return <button>Nothing to do for now</button>;
}

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });
});

