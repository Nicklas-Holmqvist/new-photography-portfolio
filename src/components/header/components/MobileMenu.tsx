import { Drawer, Grid } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Footer } from '../..';

export const MobileMenu = () => {
  const menuItems: { name: string; path: string }[] = [
    {
      name: 'Hem',
      path: '/',
    },
    {
      name: 'Landskap',
      path: '/gallery/landscape',
    },
    {
      name: 'Gamla byggnader',
      path: '/gallery/oldBuildings',
    },
  ];

  const navigateTo = useNavigate();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (event: boolean) => {
    setDrawer(event);
  };

  const imageVariant = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <Grid sx={{ paddingLeft: '24px' }}>
      <MenuIcon
        sx={{ fontSize: 48, cursor: 'pointer' }}
        onClick={() => toggleDrawer(true)}
      />
      <Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.2 }}
        >
          <CloseIcon
            onClick={() => toggleDrawer(false)}
            sx={{
              top: 0,
              right: 0,
              position: 'fixed',
              margin: '22px 26px 0 0',
              fontSize: 48,
              cursor: 'pointer',
            }}
          />
        </motion.div>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ height: '100vh', overflow: 'hidden' }}
        >
          <ul
            style={{
              margin: 0,
              padding: '8rem 0 0 0',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {menuItems.map((item, i) => (
              <motion.div
                variants={imageVariant}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.2, duration: 0.2 }}
                style={{ width: '100vw' }}
              >
                <li
                  onClick={() => {
                    setDrawer(false);
                    navigateTo(`${item.path}`);
                  }}
                  style={{
                    listStyle: 'none',
                    textAlign: 'center',
                    paddingTop: '4rem',
                    fontSize: 36,
                    cursor: 'pointer',
                  }}
                >
                  {item.name}
                </li>
              </motion.div>
            ))}
          </ul>
          <Footer />
        </Grid>
      </Drawer>
    </Grid>
  );
};
