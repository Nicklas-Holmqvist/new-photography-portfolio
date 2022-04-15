import { Grid } from '@mui/material';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

export const MenuListItem = (props: { path: string; title: string }) => {
  const path: string = `/#${props.path}`;
  const style = {
    textDecoration: 'none',
  };
  return (
    <Grid>
      <HashLink
        style={style}
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
        to={path}
      >
        {props.title}
      </HashLink>
    </Grid>
  );
};
