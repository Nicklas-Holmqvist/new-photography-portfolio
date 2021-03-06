import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { useActiveGalleryContext } from '../../../context/activeGallery';

export const MenuListItem = (props: {
  path: string;
  title: string;
  active: string;
  anchor: string;
  activePage: (event: string) => void;
}) => {
  const context = useActiveGalleryContext();
  const [hover, setHover] = useState<boolean>(false);
  const path: string = `${props.path}`;

  const style = {
    normal: {
      textDecoration: 'none',
      color: '#0A0908',
      fontSize: 20,
    },
    hover: {
      color: '#0A0908',
      textDecoration: 'none',
      paddingBottom: 2,
      borderBottom: '2px solid #0A0908',
      fontSize: 20,
    },
  };

  return (
    <Grid>
      <Link
        style={
          hover || context.activeLink === props.anchor
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
