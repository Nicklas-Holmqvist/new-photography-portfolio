import { Grid } from '@mui/material';
import React from 'react';
import { galleryInformation } from './gallery/galleryInformation';
import { Category } from './index';

export const LandingPage = () => {
  const style = {
    container: { width: '100%', margin: 'auto' },
    hero: {
      height: '100vh',
      backgroundImage: 'url("/assets/hero.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
      marginBottom: 96,
    },
  };

  return (
    <Grid style={style.container}>
      <Grid item style={style.hero}></Grid>
      {galleryInformation.map((category) => (
        <div className="category-section" key={category.title}>
          <Category
            title={category.title}
            information={category.information}
            imagePath={category.imagePath}
            imageAlt={category.imagePath}
            position={category.reverse}
            anchor={category.anchor}
            showBtn={category.showBtn}
          />
        </div>
      ))}
    </Grid>
  );
};
