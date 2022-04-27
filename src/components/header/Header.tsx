import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { MenuListItem } from './components';
import Logo from '../utils/icons/logo-daymode.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const style = {
    container: {
      top: 0,
      backgroundColor: '#f4f3ee',
      zIndex: 100,
    },
    header: {
      padding: '10px 0',
      maxWidth: 1200,
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

  const activePage = (page: string) => setActiveLink(page);

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
          <MenuListItem
            active={activeLink}
            activePage={activePage}
            path="landscape"
            title="Landskap"
          />
          <MenuListItem
            active={activeLink}
            activePage={activePage}
            path="oldBuildings"
            title="Gamla byggnader"
          />
        </ul>
      </Grid>
    </Grid>
  );
};
