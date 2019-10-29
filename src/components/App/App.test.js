import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import 'regenerator-runtime/runtime';
import { StateProvider } from '@react-ent/core';
import { App } from './App';

/**
 * This test passes, but with a console error. Updates to
 * StateProvider inside a test needs bot be wrapped in act(...),
 * which this is, but the error is still thrown. I must be
 * doing something wrong.
 */
describe('App', () => {
  it('renders without crashing', () => {
    act(() => {
      const div = document.createElement('div');
      ReactDOM.render(
        <StateProvider>
          <App />
        </StateProvider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
