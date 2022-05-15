import React from 'react';
import { Grid, Typography } from '@mui/material';

import Logo from '../utils/icons/logo-daymode.png';

import './styles.css';

export const IntroScreen = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="container"
    >
      <img src={Logo} alt="logo" className="logo" />
      <Typography className="photographer">Fotograf</Typography>
      <Typography className="developer">Utvecklare</Typography>
      <Typography className="name">Nicklas Holmqvist</Typography>
    </Grid>
  );
};
