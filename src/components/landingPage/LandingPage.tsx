import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { sortBy } from 'lodash';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import getCategories from '../../contentful/getCategories';
import { Category } from '../index';
import { ICategory } from '../../types';
import { IntroScreen } from '../introScreen';
import { useActiveGalleryContext } from '../../context/activeGallery';

import './styles.css';

export const LandingPage = () => {
  const params = useParams();
  const context = useActiveGalleryContext();
  const [categories, setCategories] = useState<any[]>();
  const [isIntro, setIsIntro] = useState<boolean>(true);

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

  useEffect(() => {
    const seenIntro = document.cookie;
    if (seenIntro.includes('true')) setIsIntro(false);
    setTimeout(() => {
      document.cookie = 'intro=true';
      setIsIntro(false);
    }, 8500);
  }, []);

  const categoryVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredCategories: ICategory[] = sortBy(categories, 'order');

  return (
    <>
      {isIntro ? (
        <IntroScreen />
      ) : (
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
              transition={{ delay: index * 1 }}
              key={index}
            >
              <Helmet>
                <title>Startsida | nicklasholmqvist.se</title>
                <meta
                  name="startsida"
                  content="Fotografisk portfolio och CV av Nicklas Holmqvist"
                />
              </Helmet>
              <Grid item className="category-section">
                <Category category={category} />
              </Grid>
            </motion.div>
          ))}
        </Grid>
      )}
    </>
  );
};
