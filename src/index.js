import React from 'react';
import ReactDOM from 'react-dom';
import { ReactEnt, StateProvider } from '@react-ent/core';
import { reactEnt as config } from 'config';
import { App } from './components/App';
import * as serviceWorker from './serviceWorker';

ReactEnt.init(config);

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
