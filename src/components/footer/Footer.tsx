import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilitySensor from 'react-visibility-sensor';
import { Grid, IconButton, Typography } from '@mui/material';

import { ScrollToTop } from '../';
import { motion } from 'framer-motion';

export const Footer = () => {
  const [showToTop, setShowToTop] = useState<boolean>(false);

  const style = {
    icons: {
      margin: '0 16px',
      textDecoration: 'none',
    },
  };
  return (
    <VisibilitySensor onChange={() => setShowToTop(!showToTop)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 1400,
          width: '100%',
          margin: '0 auto',
          padding: '16px 0',
        }}
      >
        <Grid
          item
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
                },
              }}
            >
              <FacebookIcon color="primary" />
            </IconButton>
          </a>
        </Grid>
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <Typography
            sx={{
              fontSize: {
                xs: 12,
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
        {/* {showToTop && <ScrollToTop />} */}
      </motion.div>
    </VisibilitySensor>
  );
};
