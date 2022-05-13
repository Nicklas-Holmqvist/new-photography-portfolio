import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';

import getGallery from '../../contentful/getGallery';
import { IGallery } from '../../types';
import { ImageModal } from '../imageModal';
import { NoPageFound } from '../noPageFound/NoPageFound';
import { LockRightClick } from '../helpers';
import { useActiveGalleryContext } from '../../context/activeGallery';

export interface IGallery1 {
  title: string;
  gallery: {
    file: {
      url: string;
    }[];
  };
}

export interface IGalleryInformation {
  gallery: string;
  title: string;
  information: string;
  imagePath: string;
  imageAlt: string;
  reverse: boolean;
  anchor: string;
  showBtn: boolean;
}
export const Gallery = () => {
  const context = useActiveGalleryContext();
  const params = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');
  const [loaded, setLoaded] = useState<boolean>(false);
  const [test, setTest] = useState<any>([]);

  const mediaQueryMobile = useMediaQuery('(min-width:600px)');

  const navigate = useNavigate();

  const style = {
    container: {
      display: 'flex',
      maxWidth: 1400,
      width: '100%',
      minHeight: '100vh',
      paddingTop: '6rem',
      margin: 'auto',
    },
    link: {
      cursor: 'pointer',
    },
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : null
    );
  };

  const openImageModal = (e: any) => {
    if (!mediaQueryMobile) return;
    const target = e.target;
    const image: IGallery = {
      id: target.id,
      imagePath: target.src,
      imageAlt: target.alt,
      gallery: target.title,
    };
    setModalImage(image);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const getEntries = async () => {
      // console.log(params.id);
      setTest([]);
      const gallery = await getGallery(params.id as string);
      if (gallery?.length === 0 || gallery === undefined) {
        context.handleActiveLink('');
        return;
      }
      // console.log(gallery);
      setTest(gallery[0]);
      context.handleActiveLink(gallery[0].title);
    };
    getEntries();
  }, [params]);

  const imageVariant = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  console.log(context.noGallery);

  return (
    <>
      <Helmet>
        <title>Galleri | nicklasholmqvist.se</title>
        <meta name="galleri" content="Fotogalleri av Nicklas Holmqvist" />
      </Helmet>
      {context.noGallery ? (
        <NoPageFound />
      ) : (
        <>
          <Grid container style={style.container} flexDirection="column">
            {openModal && (
              <ImageModal
                image={modalImage}
                open={openModal}
                handleClose={closeModal}
              />
            )}
            <Grid
              item
              flexDirection="row"
              alignItems="center"
              style={style.link}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
              onClick={() => navigate('/')}
            >
              <ArrowBackIosNewIcon sx={{ pr: 1, pl: 3, fontSize: 16 }} />
              <Typography>Gå tillbaka</Typography>
            </Grid>
            {test.length === 0 ? (
              <></>
            ) : (
              <ImageList
                variant="masonry"
                cols={mediaQueryMobile ? 3 : 1}
                gap={4}
              >
                {test!.galleryImages!.map((image: any, index: number) => (
                  <motion.div
                    variants={imageVariant}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.01 }}
                    onContextMenu={handleContextMenu}
                  >
                    <LockRightClick
                      contextMenu={contextMenu}
                      handleClose={handleClose}
                    />
                    <ImageListItem
                      key={Number(index)}
                      style={loaded ? {} : { opacity: 0, overflow: 'hidden' }}
                      sx={{
                        cursor: mediaQueryMobile ? 'pointer' : 'default',
                        '&:hover': {
                          transform: 'scale(1.002)',
                        },
                      }}
                    >
                      <img
                        src={`https:${image.file.url}`}
                        srcSet={`https:${image.file.url}`}
                        alt={image.title}
                        loading="lazy"
                        onClick={openImageModal}
                        onLoad={() => setLoaded(true)}
                      />
                    </ImageListItem>
                  </motion.div>
                ))}
              </ImageList>
            )}
          </Grid>
          )
        </>
      )}
    </>
  );
};
