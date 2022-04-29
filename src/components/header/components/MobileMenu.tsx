import { Drawer, Grid } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const MobileMenu = () => {
  const [drawer, setDrawer] = useState(false);

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
        <MenuIcon />
      </Drawer>
    </Grid>
  );
};
