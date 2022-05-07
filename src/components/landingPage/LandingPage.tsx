import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import { Category } from '../index';
import { useHeaderContext } from '../../context/gallery';
import { galleryInformation } from '../utils/text/galleryInformation';
import { Helmet } from 'react-helmet-async';

export const LandingPage = () => {
  const context = useHeaderContext();
  useEffect(() => {
    context.handleActiveLink('');
  }, [context]);

  const categoryVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Grid
      sx={{
        width: '100%',
        margin: 'auto',
        marginTop: {
          xs: '6rem',
          md: '8rem',
        },
      }}
    >
      {galleryInformation.map((category, i) => (
        <motion.div
          variants={categoryVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: i * 0.5 }}
        >
          <Helmet>
            <title>Startsida | nicklasholmqvist.se</title>
            <meta
              name="startsida"
              content="Fotografisk portfolio och CV av Nicklas Holmqvist"
            />
          </Helmet>
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
