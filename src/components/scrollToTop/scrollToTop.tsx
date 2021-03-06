import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Grid, IconButton } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ScrollToTop = () => {
  const mediaQueryMobile = useMediaQuery('(min-width:900px)');
  return (
    <Grid
      sx={{
        position: 'fixed',
        bottom: mediaQueryMobile ? 42 : 57,
        right: mediaQueryMobile ? 28 : 4,
      }}
    >
      <IconButton>
        <ArrowCircleUpIcon
          color="primary"
          sx={{
            fontSize: {
              xs: 36,
              md: 48,
            },
            cursor: 'pointer',
          }}
          onClick={() => scroll.scrollToTop()}
        />
      </IconButton>
    </Grid>
  );
};
