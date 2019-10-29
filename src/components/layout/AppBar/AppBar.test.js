import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar } from './AppBar';

describe('AppBar', () => {
  it('runs without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
