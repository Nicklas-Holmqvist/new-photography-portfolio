import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const MenuListItem = (props: { path: string; title: string }) => {
  const path: string = `/gallery/${props.path}`;
  const style = {
    textDecoration: 'none',
    color: '#0A0908',
  };
  return (
    <Grid>
      <Link style={style} to={path}>
        {props.title}
      </Link>
    </Grid>
  );
};
