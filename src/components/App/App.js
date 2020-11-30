import React, { memo } from 'react';
import { useGet, useGlobalState, useSave } from '@rlean/core';
import Routes from '../../Routes';
import { DemoModel } from 'lib/models';

import 'assets/custom-styles.css';

export const App = memo(() => {
  const [{ demoModel }] = useGlobalState();
  const [save] = useSave();

  console.log('demoModel:', demoModel);

  useGet({ model: DemoModel });

  const updateDemoModel = () => {
    save({ model: DemoModel, value: { id: 1, value: 'test' } });
  };

  return (
    <div className="App">
      <Routes />

      <button type="button" onClick={() => updateDemoModel()}>
        Update Demo Model
      </button>
    </div>
  );
});
