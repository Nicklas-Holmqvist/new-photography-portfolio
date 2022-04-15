import { Grid } from '@mui/material';
import React from 'react';
import { MenuListItem } from './components';

export const Header = () => {
  const style = {
    header: {
      width: '100%',
      padding: '20px 0',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 250,
    },
  };
  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      style={style.header}
    >
      <span>LOGO</span>
      <ul style={style.list}>
        <MenuListItem path="landskap" title="Landskap" />
        <MenuListItem path="gamla-byggnader" title="Gamla byggnader" />
      </ul>
    </Grid>
  );
};
