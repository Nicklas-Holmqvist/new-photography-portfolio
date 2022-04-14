import { Grid } from '@mui/material';
import React from 'react';
import { MenuListItem } from './components';

export const Header = () => {
  return (
    <Grid container display="flex" justifyContent="row">
      <span>LOGO</span>
      <ul>
        <MenuListItem path="landskap" title="Landskap" />
        <MenuListItem path="gamla-byggnader" title="Gamla byggnader" />
      </ul>
    </Grid>
  );
};
