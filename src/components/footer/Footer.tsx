import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import useMediaQuery from '@mui/material/useMediaQuery';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Grid, IconButton, Typography } from '@mui/material';

export const Footer = () => {
  const mediaQueryMobile = useMediaQuery('(min-width:600px)');
  const style = {
    container: {
      maxWidth: 1400,
      width: '100%',
      margin: '0 auto',
      padding: '16px 0',
    },
    icons: {
      margin: '0 16px',
      textDecoration: 'none',
    },
  };
  return (
    <Grid
      container
      display="flex"
      flexDirection={!mediaQueryMobile ? 'column-reverse' : 'column'}
      justifyContent="center"
      alignItems="center"
      style={style.container}
    >
      <Grid
        item
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: {
              xs: 12,
              md: 16,
            },
            mb: {
              xs: 2,
              md: 0,
            },
            px: {
              xs: 2,
            },
          }}
        >
          Copyright © | 2022 - Nicklas Holmqvist - All rights reserved
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ pb: 1 }}
      >
        <a
          href="https://www.instagram.com/nicklas.holmqvist"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              m: {
                xs: 1,
                md: 3,
              },
            }}
          >
            <InstagramIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://github.com/Nicklas-Holmqvist"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              m: {
                xs: 1,
                md: 3,
              },
            }}
          >
            <GitHubIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/nicklas-holmqvist-b96b901a8/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              m: {
                xs: 1,
                md: 3,
              },
            }}
          >
            <LinkedInIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="mailto:nicklas_holmqvist@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              m: {
                xs: 1,
                md: 3,
              },
            }}
          >
            <MailOutlineIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.facebook.com/glomd.varld.marks.harad"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              m: {
                xs: 1,
                md: 3,
              },
            }}
          >
            <FacebookIcon color="primary" />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  );
};
