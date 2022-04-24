import { Button, Grid, Typography } from '@mui/material';
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
      // padding: '40px 0',
      margin: 'auto',
    },
    categoryInformation: {
      width: '50%',
    },
    title: {
      paddingBottom: '1rem',
      color: 'grey',
    },
    information: {
      color: 'grey',
      paddingBottom: 16,
    },
    image: {
      width: '100%',
    },
    button: {
      borderColor: 'lightgrey',
      color: 'grey',
      '&:hover': {
        backgroundColor: 'white',
      },
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
        style={style.categoryInformation}
        md={6}
        sx={{ height: 500 }}
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
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
              style={style.button}
              sx={{ borderColor: 'grey' }}
            >
              Visa galleri
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        className="categoryImage"
        md={6}
        style={style.image}
        sx={{
          height: 500,
          backgroundImage: `url(${props.imagePath})`,
          backgroundPosition: 'center',
        }}
      ></Grid>
    </Grid>
  );
};
