import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

import { ICategory } from '../../types';

export const Category = (props: { category: ICategory }) => {
  const navigate = useNavigate();
  const style = {
    container: {
      maxWidth: 1400,
      width: '100%',
      margin: 'auto',
    },
    categoryInformation: {
      width: '90%',
    },
    title: {
      paddingBottom: '1rem',
    },
    information: {
      paddingBottom: 16,
    },
    image: {
      width: '100%',
      height: 500,
      backgroundImage: `url(https:${props.category.categoryImage.file.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      flexDirection={props.category.reverseView ? 'row-reverse' : 'row'}
      id={props.category.path}
      style={style.container}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        xs={12}
        md={6}
        sx={{ height: 500 }}
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            style={style.categoryInformation}
            sx={{ margin: 'auto' }}
          >
            <Typography style={style.title} variant="h2">
              {props.category.title}
            </Typography>
            <Typography style={style.information} sx={{ maxWidth: '64ch' }}>
              {props.category.description}
            </Typography>
            {props.category.showBtn && (
              <Button
                variant="outlined"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`${props.category.path}`);
                }}
                size="large"
                sx={{ borderColor: 'grey' }}
              >
                Visa galleri
              </Button>
            )}
          </Grid>
        </motion.div>
      </Grid>
      <Grid item className="categoryImage" xs={12} md={6}>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          style={style.image}
        ></motion.div>
      </Grid>
    </Grid>
  );
};
