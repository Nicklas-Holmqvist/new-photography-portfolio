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

import './styles.css';

export const LandingPage = () => {
  const params = useParams();
  const context = useActiveGalleryContext();
  const [categories, setCategories] = useState<any[]>();
  const [contentHeight, setContentHeight] = useState<string | number>('100vh');

  const categoryVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    const getEntries = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    setTimeout(() => setContentHeight(500 * getEntries.length), 500);
    getEntries();
  }, []);

  useEffect(() => {
    if (!params.id) return context.handleActiveLink('home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCategories: ICategory[] = sortBy(categories, 'order');

  return (
    <Grid container style={{ minHeight: contentHeight }}>
      <Helmet>
        <title>Startsida | nicklasholmqvist.se</title>
        <meta
          name="description"
          content="Fotografisk portfolio och CV av Nicklas Holmqvist"
        />
      </Helmet>
      <Grid
        className="landingPage"
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
        {filteredCategories.map((category, index: number) => (
          <motion.div
            variants={categoryVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.6 }}
            key={index}
          >
            <Grid item className="category-section">
              <Category category={category} />
            </Grid>
          </motion.div>
        ))}
      </Grid>
    </Grid>
  );
};
