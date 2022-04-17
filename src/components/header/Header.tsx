import { Grid } from '@mui/material';
import React from 'react';
import { MenuListItem } from './components';

export const Header = () => {
  const style = {
    header: {
      maxWidth: 1200,
      width: '100%',
      padding: '5px 0',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 100,
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
      position="fixed"
    >
      <span>LOGO</span>
      <ul style={style.list}>
        <MenuListItem path="landskap" title="Landskap" />
        <MenuListItem path="gamlaByggnader" title="Gamla byggnader" />
      </ul>
    </Grid>
  );
};
