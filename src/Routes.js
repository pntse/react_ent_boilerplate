import React from 'react';
import { Router, navigate } from '@reach/router';

import { Main } from 'components/layout/Main';

import { Home } from 'components/pages/Home';
import { About } from 'components/pages/About';

const Routes = ({ children }) => (
  <Main navigate={navigate} children={children}>
    <Router>
      <Home path='/' navigate={navigate} />
      <About path='/about' navigate={navigate} />
    </Router>
  </Main>
);

export default Routes;
