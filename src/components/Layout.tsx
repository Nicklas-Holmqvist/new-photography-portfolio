import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gallery } from './gallery';
import { LandingPage, Footer, Header } from './index';
import { theme } from '../theme';
import '@fontsource/inter';
import '@fontsource/alike';
import '@fontsource/poppins';
import { HeaderProvider } from '../context/header';

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
        <HeaderProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/gallery/:id" element={<Gallery />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </HeaderProvider>
      </ThemeProvider>
    </Grid>
  );
};

export default Layout;
