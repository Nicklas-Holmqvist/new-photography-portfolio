import { Grid } from '@mui/material';
import React from 'react';
import { Content, Footer, Header } from './index';

const Layout = () => {
  const style = {
    maxWidth: 1400,
    width: '100%',
    margin: 'auto',
  };
  return (
    <Grid container display="flex" justifyContent="column" style={style}>
      <Header />
      <Content />
      <Footer />
    </Grid>
  );
};

export default Layout;
