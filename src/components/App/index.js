import React, { memo } from 'react';
import { useGlobalState, useSave } from '@rlean/core';
import { DemoEntity } from 'lib/entities';
import Routes from 'Routes';
import 'assets/styles.css';

const App = () => {
  const [{ demoEntity }] = useGlobalState();
  const [save] = useSave();

  console.log('demoEntity:', demoEntity);

  const updateDemoEntity = () => {
    save({ entity: DemoEntity, value: { id: 1, value: 'test' } });
  };

  return (
    <div className="app">
      <Routes />

      <button type="button" onClick={() => updateDemoEntity()}>
        Update Demo Model
      </button>
    </div>
  );
};

export default memo(App);
