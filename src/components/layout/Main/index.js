import React, { memo } from 'react';
import { AppBar } from '../';

const Main = props => {
  return (
    <div className="main-container">
      <AppBar />
      <div id="page-container">{props.children}</div>
    </div>
  );
};

export default memo(Main);
