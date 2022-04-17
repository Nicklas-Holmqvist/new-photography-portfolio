import { Grid } from '@mui/material';
import React from 'react';
import { Category } from './index';

export const LandingPage = () => {
  const style = {
    width: '100%',
  };
  const categories = [
    {
      title: 'Landskap',
      information: 'Information',
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      reverse: false,
      anchor: 'landskap',
    },
    {
      title: 'Gamla byggnader',
      information: 'Information',
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      reverse: true,
      anchor: 'gamlaByggnader',
    },
  ];

  return (
    <Grid style={style}>
      {categories.map((category) => (
        <div className="category-section" key={category.title}>
          <Category
            title={category.title}
            information={category.information}
            imagePath={category.imagePath}
            imageAlt={category.imagePath}
            position={category.reverse}
            anchor={category.anchor}
          />
        </div>
      ))}
    </Grid>
  );
};
