import React from 'react';
import { MenuListItem } from './components';

const menuItems = ['Landskap', 'Gamla byggnader'];

export const Header = () => {
  return (
    <>
      <span>LOGO</span>
      <ul>
        {menuItems.map((item) => (
          <MenuListItem path={item} title={item} />
        ))}
      </ul>
    </>
  );
};
