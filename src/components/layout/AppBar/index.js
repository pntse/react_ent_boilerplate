import React, { memo } from 'react';
import { Link } from '@reach/router';

const AppBar = () => {
  return (
    <header id="header">
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
};

export default memo(AppBar);
