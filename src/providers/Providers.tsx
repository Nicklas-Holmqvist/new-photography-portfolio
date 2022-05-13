import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/inter';
import '@fontsource/alike';
import '@fontsource/poppins';

import { theme } from '../theme';
import { Layout } from '../components';
import { ActiveGalleryProvider } from '../context/activeGallery';
import { HelmetProvider } from 'react-helmet-async';

export const Providers = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <ActiveGalleryProvider>
            <Layout />
          </ActiveGalleryProvider>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};
