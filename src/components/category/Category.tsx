import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

interface ICategory {
  title: string;
  information: string;
  imagePath: string;
  imageAlt: string;
  position: boolean;
  anchor: string;
  openGallery: Function;
}

export const Category = (props: ICategory) => {
  const style = {
    container: {
      width: '100%',
      padding: '40px 0',
    },
    categoryInformation: {
      maxWidth: 600,
      width: '100%',
      paddingLeft: 40,
    },
    title: {
      paddingBottom: '1rem',
    },
    image: {
      maxWidth: 800,
      width: '100%',
    },
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      flexDirection={props.position ? 'row-reverse' : 'row'}
      id={props.anchor}
      style={style.container}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={style.categoryInformation}
      >
        <Grid item>
          <Typography style={style.title} variant="h2">
            {props.title}
          </Typography>
          <Typography>{props.information}</Typography>
          <Button
            onClick={() => {
              props.openGallery(props.anchor);
            }}
          >
            Visa galleri
          </Button>
        </Grid>
      </Grid>
      <Grid item className="categoryImage">
        <img
          src={props.imagePath}
          alt={props.imageAlt}
          style={style.image}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
};
