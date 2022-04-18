import { Grid } from '@mui/material';
import React from 'react';
import { MenuListItem } from './components';

export const Header = () => {
  const style = {
    container: {
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 100,
    },
    header: {
      padding: '5px 0',
      maxWidth: 800,
      width: '100%',
      margin: 'auto',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 250,
    },
  };
  return (
    <Grid container style={style.container} position="fixed">
      <Grid
        item
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        style={style.header}
      >
        <span>LOGO</span>
        <ul style={style.list}>
          <MenuListItem path="landscape" title="Landskap" />
          <MenuListItem path="oldBuildings" title="Gamla byggnader" />
        </ul>
      </Grid>
    </Grid>
  );
};
