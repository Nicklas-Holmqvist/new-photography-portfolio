import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const NoPageFound = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '87vh', width: '100vw' }}
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h3" sx={{ pb: 3 }}>
          Du har gått vilse, inget här att se!
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate('/', { replace: true })}
        >
          Gå till start
        </Button>
      </Grid>
    </Grid>
  );
};
