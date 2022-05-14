import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { sortBy } from 'lodash';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import getCategories from '../../contentful/getCategories';
import { Category } from '../index';
import { ICategory } from '../../types';
import { useActiveGalleryContext } from '../../context/activeGallery';

export const LandingPage = () => {
  const params = useParams();
  const context = useActiveGalleryContext();
  const [categories, setCategories] = useState<any[]>();

  useEffect(() => {
    const getEntries = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    getEntries();
  }, []);

  useEffect(() => {
    if (!params.id) return context.handleActiveLink('home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredCategories: ICategory[] = sortBy(categories, 'order');

  return (
    <Grid
      sx={{
        height: '100%',
        width: '100%',
        margin: 'auto',
        marginTop: {
          xs: '6rem',
          md: '8rem',
        },
      }}
    >
      {filteredCategories.map((category, i: number) => (
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
            <Category category={category} />
          </Grid>
        </motion.div>
      ))}
    </Grid>
  );
};
