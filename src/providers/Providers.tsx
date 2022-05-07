import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/inter';
import '@fontsource/alike';
import '@fontsource/poppins';

import { theme } from '../theme';
import { Layout } from '../components';
import { HeaderProvider } from '../context/gallery';
import { HelmetProvider } from 'react-helmet-async';

export const Providers = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <HeaderProvider>
            <Layout />
          </HeaderProvider>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};
