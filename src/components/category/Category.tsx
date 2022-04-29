import { Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ICategory {
  title: string;
  information: string;
  imagePath: string;
  imageAlt: string;
  position: boolean;
  anchor: string;
  showBtn: boolean;
}

export const Category = (props: ICategory) => {
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
      backgroundImage: `url(${props.imageAlt})`,
      backgroundPosition: 'center',
    },
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      flexDirection={props.position ? 'row-reverse' : 'row'}
      id={props.anchor}
      style={style.container}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        md={6}
        sx={{ height: 500 }}
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
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
              {props.title}
            </Typography>
            <Typography style={style.information} sx={{ maxWidth: '64ch' }}>
              {props.information}
            </Typography>
            {props.showBtn && (
              <Button
                variant="outlined"
                onClick={() => {
                  navigate(`/gallery/${props.anchor}`);
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
      <Grid item className="categoryImage" md={6}>
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
