import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Logo from '../utils/icons/logo-daymode.png';
import { MobileMenu } from '../mobileMenu/MobileMenu';
import { MenuListItem } from './components';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const style = {
    container: {
      top: 0,
      backgroundColor: 'rgba(243, 243, 243,0.9)',
      zIndex: 100,
    },
    header: {
      padding: '0.5rem 2rem',
      maxWidth: 1300,
      width: '100%',
      margin: 'auto',
    },
    logo: {
      height: 50,
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 300,
    },
  };

  const activePage = (page: string) => {
    window.scrollTo(0, 0);
    setActiveLink(page);
  };

  return (
    <Grid container style={style.container} position="fixed">
      <Grid
        item
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          width: '100%',
          display: {
            xs: 'flex',
            md: 'none',
          },
          padding: '2rem 0 1.2rem 0',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            width: '33%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MobileMenu />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ width: '33%', display: 'flex', justifyContent: 'center' }}
        >
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo" style={style.logo} />
          </Link>
        </motion.div>
        <Grid item style={{ width: '33%' }}></Grid>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={style.header}
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
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
              path="landscapes"
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
              path="old-buildings"
              title="Gamla byggnader"
            />
          </motion.div>
        </ul>
      </Grid>
    </Grid>
  );
};
