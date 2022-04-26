import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  const style = {
    container: {
      maxWidth: 1400,
      width: '100%',
      margin: 'auto',
      padding: '48px 0',
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
        <Typography>
          Copyright © | 2022 - Nicklas Holmqvist - All rights reserved
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a
          href="https://www.instagram.com/nicklas.holmqvist"
          target="_blank"
          rel="noreferrer"
          style={style.icons}
        >
          <IconButton>
            <InstagramIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://github.com/Nicklas-Holmqvist"
          target="_blank"
          rel="noreferrer"
          style={style.icons}
        >
          <IconButton>
            <GitHubIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/nicklas-holmqvist-b96b901a8/"
          target="_blank"
          rel="noreferrer"
          style={style.icons}
        >
          <IconButton>
            <LinkedInIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="mailto:nicklas_holmqvist@outlook.com"
          target="_blank"
          rel="noreferrer"
          style={style.icons}
        >
          <IconButton>
            <MailOutlineIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.facebook.com/glomd.varld.marks.harad"
          target="_blank"
          rel="noreferrer"
          style={style.icons}
        >
          <IconButton>
            <FacebookIcon color="primary" />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  );
};
