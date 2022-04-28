import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { Category } from './index';
import { useHeaderContext } from '../context/header';
import { galleryInformation } from './gallery/galleryInformation';
import { motion } from 'framer-motion';

export const LandingPage = () => {
  const context = useHeaderContext();
  const style = {
    container: { width: '100%', margin: 'auto', marginTop: '6rem' },
  };
  useEffect(() => {
    context.handleActiveLink('');
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
      },
    },
  };

  const categoryVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Grid style={style.container}>
      {galleryInformation.map((category, i) => (
        <motion.div
          variants={categoryVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: i * 0.5 }}
        >
          <Grid item className="category-section" key={category.title}>
            <Category
              title={category.title}
              information={category.information}
              imagePath={category.imagePath}
              imageAlt={category.imagePath}
              position={category.reverse}
              anchor={category.anchor}
              showBtn={category.showBtn}
            />
          </Grid>
        </motion.div>
      ))}
    </Grid>
  );
};
