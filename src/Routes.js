import React from 'react';
import { Router } from '@reach/router';
import { Main } from 'components/layout';
import { About, Home } from 'components/pages';

const Routes = ({ children }) => (
  <Main children={children}>
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </Main>
);

export default Routes;
