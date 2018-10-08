import React from 'react';
import { Menu } from './Menu';
import './GeneralLayout.styl';

export const GeneralLayout = ({ children }) => (
  <div className={'general-layout'}>
    <div className={'general-layout__menu'}>
      <Menu />
    </div>
    <div className={'general-layout__sub-container'}>
      {children || ''}
    </div>
  </div>
);
