import React, { memo, useEffect } from 'react';
import { useGet, useStateValue, useSave } from '@rlean/core';
import Routes from '../../Routes';
import { DemoModel } from 'lib/models';

import 'assets/custom-styles.css';

export const App = memo(() => {
  const [{ demoModel }] = useStateValue();
  const [save] = useSave();

  console.log('demoModel:', demoModel);

  useEffect(() => {
    save({ model: DemoModel, value: 'test' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGet({ model: DemoModel });

  return (
    <div className='App'>
      <Routes />
    </div>
  );
});
