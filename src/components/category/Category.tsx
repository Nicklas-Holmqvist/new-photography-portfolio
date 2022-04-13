import { Grid, Typography } from '@mui/material';
import React from 'react';

interface ICategory {
  title: string;
  information: string;
  imagePath: string;
  imageAlt: string;
  position: boolean;
}

export const Category = (props: ICategory) => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent={props.position ? 'column-reverse' : 'column'}
    >
      <Grid item className="categoryInformation">
        <Typography variant="h2">{props.title}</Typography>
        <Typography>{props.information}</Typography>
      </Grid>
      <Grid item className="categoryImage">
        <img src={props.imagePath} alt={props.imageAlt} />
      </Grid>
    </Grid>
  );
};
