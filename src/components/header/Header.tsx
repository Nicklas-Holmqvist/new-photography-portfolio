import { Grid } from '@mui/material';
import React from 'react';
import { MenuListItem } from './components';
import Logo from '../utils/icons/logo-daymode.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  const style = {
    container: {
      top: 0,
      backgroundColor: 'rgba(244, 244, 244, 0.8)',
      zIndex: 100,
      // borderBottom: '1px solid grey',
      boxShadow: '0 1px 3px 0 grey',
    },
    header: {
      padding: '10px 0',
      maxWidth: 1000,
      width: '100%',
      margin: 'auto',
    },
    logo: {
      height: '10%',
      width: '10%',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 300,
    },
  };
  return (
    <Grid container style={style.container} position="fixed">
      <Grid
        item
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={style.header}
      >
        <Link to="/">
          <img src={Logo} alt="logo" style={style.logo} />
        </Link>

        <ul style={style.list}>
          <MenuListItem path="landscape" title="Landskap" />
          <MenuListItem path="oldBuildings" title="Gamla byggnader" />
        </ul>
      </Grid>
    </Grid>
  );
};
