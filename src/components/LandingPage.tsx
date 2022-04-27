import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { Category } from './index';
import { useHeaderContext } from '../context/header';
import { galleryInformation } from './gallery/galleryInformation';

export const LandingPage = () => {
  const context = useHeaderContext();
  const style = {
    container: { width: '100%', margin: 'auto', marginTop: '6rem' },
  };
  useEffect(() => {
    context.handleActiveLink('');
  }, []);

  return (
    <Grid style={style.container}>
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
