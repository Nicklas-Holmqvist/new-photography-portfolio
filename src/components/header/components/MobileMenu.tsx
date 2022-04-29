import { Drawer, Grid } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Footer } from '../..';

export const MobileMenu = () => {
  const navigateTo = useNavigate();
  const maxWidth = useMediaQuery('(min-width:600px)');
  const [drawer, setDrawer] = useState(false);
  const showMobileMenu = maxWidth ? 'none' : 'flex';
  console.log(showMobileMenu);

  const toggleDrawer = (event: boolean) => {
    setDrawer(event);
  };
  return (
    <Grid sx={{ paddingLeft: '24px' }}>
      <MenuIcon
        sx={{ fontSize: '2.5rem', cursor: 'pointer' }}
        onClick={() => toggleDrawer(true)}
      />
      <Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
        <CloseIcon
          onClick={() => toggleDrawer(false)}
          sx={{
            top: 0,
            right: 0,
            position: 'fixed',
            margin: '2rem 3rem 0 0',
            fontSize: 36,
            cursor: 'pointer',
          }}
        />
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ height: '100vh' }}
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
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{ width: '100vw' }}
            >
              <li
                onClick={() => {
                  setDrawer(false);
                  navigateTo('/');
                }}
                style={{
                  listStyle: 'none',
                  textAlign: 'center',
                  paddingTop: '1rem',
                  fontSize: 36,
                  cursor: 'pointer',
                }}
              >
                Hem
              </li>
            </motion.div>
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{ width: '100vw' }}
            >
              <li
                onClick={() => {
                  setDrawer(false);
                  navigateTo('/gallery/landscape');
                }}
                style={{
                  listStyle: 'none',
                  textAlign: 'center',
                  paddingTop: '1rem',
                  fontSize: 36,
                  cursor: 'pointer',
                }}
              >
                Landskap
              </li>
            </motion.div>
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <li
                onClick={() => {
                  setDrawer(false);
                  navigateTo('/gallery/oldBuildings');
                }}
                style={{
                  listStyle: 'none',
                  textAlign: 'center',
                  paddingTop: '1rem',
                  fontSize: 36,
                  cursor: 'pointer',
                }}
              >
                Gamla byggnader
              </li>
            </motion.div>
          </ul>
          <Footer reverse={true} />
        </Grid>
      </Drawer>
    </Grid>
  );
};
