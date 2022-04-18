import { Grid } from '@mui/material';
import React from 'react';
import { Category } from './index';

export const LandingPage = () => {
  const style = {
    container: { width: '100%' },
    hero: {
      height: '100vh',
      backgroundImage: 'url("/assets/hero.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
    },
  };
  const categories = [
    {
      title: 'Landskap',
      information: 'Information',
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      reverse: false,
      anchor: 'landscape',
    },
    {
      title: 'Gamla byggnader',
      information: 'Information',
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      reverse: true,
      anchor: 'oldBuildings',
    },
  ];

  return (
    <Grid style={style.container}>
      <Grid item style={style.hero}></Grid>
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
