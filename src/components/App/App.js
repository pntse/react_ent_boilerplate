import React, { memo, useEffect } from 'react';
import { useGet, useStateValue, save } from '@react-ent/core';
import Routes from '../../Routes';
import { DemoModel } from 'lib/models';

import 'assets/custom-styles.css';

export const App = memo(() => {
  const [{ demoModel }, dispatch] = useStateValue();

  console.log('demoModel:', demoModel);

  useEffect(() => {
    save(new DemoModel(), { demoModel: 'test' }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGet(new DemoModel());

  return (
    <div className='App'>
      <Routes />
    </div>
  );
});
