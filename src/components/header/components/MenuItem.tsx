import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHeaderContext } from '../../../context/header';

export const MenuListItem = (props: {
  path: string;
  title: string;
  active: string;
  activePage: (event: string) => void;
}) => {
  const context = useHeaderContext();
  const [hover, setHover] = useState<boolean>(false);
  const path: string = `/gallery/${props.path}`;
  const style = {
    normal: {
      textDecoration: 'none',
      color: '#0A0908',
    },
    hover: {
      color: '#0A0908',
      textDecoration: 'none',
      paddingBottom: 3,
      borderBottom: '2px solid #0A0908',
    },
  };

  return (
    <Grid>
      <Link
        style={
          hover || context.activeLink === props.path
            ? style.hover
            : style.normal
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.activePage(props.path)}
        to={path}
      >
        {props.title}
      </Link>
    </Grid>
  );
};
