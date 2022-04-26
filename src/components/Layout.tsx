import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gallery } from './gallery';
import { LandingPage, Footer, Header } from './index';
import { theme } from '../theme';
import '@fontsource/inter';
import '@fontsource/alike';

const Layout = () => {
  const style = {
    width: '100%',
    margin: 'auto',
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="column"
      style={style}
      position="relative"
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery/:id" element={<Gallery />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Grid>
  );
};

export default Layout;
