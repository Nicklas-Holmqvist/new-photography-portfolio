import React from 'react';
import { Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorBoundary from '../errorBoundry/ErrorBoundry';
import { Gallery } from '../gallery';
import { NoPageFound } from '../noPageFound/NoPageFound';
import { LandingPage, Footer, Header } from '../index';

export const Layout = () => {
  const style = {
    width: '100%',
    margin: 'auto',
  };
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      style={style}
      position="relative"
    >
      <BrowserRouter>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery/:id" element={<Gallery />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </Grid>
  );
};
