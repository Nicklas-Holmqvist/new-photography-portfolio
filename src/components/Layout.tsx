import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gallery } from './gallery';
import { LandingPage, Footer, Header } from './index';

const Layout = () => {
  const style = {
    maxWidth: 1400,
    width: '100%',
    margin: 'auto',
  };
  return (
    <Grid container display="flex" justifyContent="column" style={style}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery/:id" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Grid>
  );
};

export default Layout;
