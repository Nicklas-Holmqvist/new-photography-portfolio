import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sortBy } from 'lodash';
import React, { useEffect, useState } from 'react';

import Logo from '../utils/icons/logo-daymode.png';
import getMenuItems from '../../contentful/getMenuItems';
import { MobileMenu } from '../mobileMenu/MobileMenu';
import { MenuListItem } from './components';
import { IMenuItem } from '../../types';

import './styles.css';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
  const style = {
    container: {
      backgroundColor: 'rgba(243, 243, 243,0.9)',
      zIndex: 90,
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
      width: `calc(120px * ${menuItems.length}`,
    },
  };

  const activePage = (page: string) => {
    window.scrollTo(0, 0);
    setActiveLink(page);
  };

  useEffect(() => {
    const getEntries = async () => {
      const items = await getMenuItems();
      if (items === undefined) return;
      setMenuItems(items);
    };
    getEntries();
  }, []);

  const sortedMenuItems = sortBy(menuItems, 'order');

  return (
    <Grid container style={style.container} position="fixed" className="header">
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
          <MobileMenu menuItems={sortedMenuItems} />
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
          {sortedMenuItems.map((item: IMenuItem, index: number) => (
            <li style={{ listStyle: 'none' }} key={index}>
              <MenuListItem
                active={activeLink}
                activePage={activePage}
                path={item.path}
                title={item.title}
                anchor={item.anchor}
              />
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
