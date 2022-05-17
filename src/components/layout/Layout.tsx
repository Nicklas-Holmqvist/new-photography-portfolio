import React from 'react';
import { Grid } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ErrorBoundary from '../errorBoundry/ErrorBoundry';
import { AnimatedRouter } from '../AnimatedRouter';
import { Header } from '../header';
import { Footer } from '../footer';

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
          <AnimatePresence exitBeforeEnter>
            <AnimatedRouter />
          </AnimatePresence>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </Grid>
  );
};
