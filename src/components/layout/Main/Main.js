import React, { memo } from 'react';
import { AppBar } from '../AppBar';

export const Main = memo(props => {
  return (
    <div className='main-container'>
      <AppBar />
      <div id='page-container'>{props.children}</div>
    </div>
  );
});
