import React from 'react';
import ReactDOM from 'react-dom';
import { RLean, StateProvider } from '@rlean/core';
import { rLean as config } from 'config';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';

RLean.init(config);

ReactDOM.render(
  <StateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
