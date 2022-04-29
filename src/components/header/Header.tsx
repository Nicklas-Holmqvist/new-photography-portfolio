import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { MenuListItem } from './components';
import Logo from '../utils/icons/logo-daymode.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const style = {
    container: {
      top: 0,
      backgroundColor: 'rgba(244,243,238,0.9)',
      zIndex: 100,
    },
    header: {
      padding: '1rem 0',
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
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link to="/">
            <img src={Logo} alt="logo" style={style.logo} />
          </Link>
        </motion.div>

        <ul style={style.list}>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <MenuListItem
              active={activeLink}
              activePage={activePage}
              path="landscape"
              title="Landskap"
            />
          </motion.div>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MenuListItem
              active={activeLink}
              activePage={activePage}
              path="oldBuildings"
              title="Gamla byggnader"
            />
          </motion.div>
        </ul>
      </Grid>
    </Grid>
  );
};
