import React, { memo } from 'react';
import { Link } from '@reach/router';

export const AppBar = memo(() => {
  return (
    <header id='header'>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
    </header>
  );
});
