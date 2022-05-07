import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/inter';
import '@fontsource/alike';
import '@fontsource/poppins';

import { theme } from '../theme';
import { Layout } from '../components';
import { HeaderProvider } from '../context/gallery';

export const Providers = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderProvider>
          <Layout />
        </HeaderProvider>
      </ThemeProvider>
    </>
  );
};
