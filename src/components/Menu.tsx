import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.styl';

export const Menu = () => (
  <div className={'menu'}>
    <Link to="/">Main</Link>
    <Link to="/settings">Settings</Link>
    <Link to="/examples">Examples</Link>
  </div>
);