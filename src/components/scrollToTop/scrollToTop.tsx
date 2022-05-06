import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Grid, IconButton } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ScrollToTop = () => {
  const mediaQueryMobile = useMediaQuery('(min-width:600px)');
  return (
    <Grid
      sx={{
        position: 'fixed',
        bottom: mediaQueryMobile ? 95 : 57,
        right: mediaQueryMobile ? 48 : 4,
      }}
    >
      <IconButton>
        <ArrowCircleUpIcon
          sx={{
            fontSize: 48,
            cursor: 'pointer',
          }}
          onClick={() => scroll.scrollToTop()}
        />
      </IconButton>
    </Grid>
  );
};
