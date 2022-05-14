import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, {
  useEffect,
  useState,
  MouseEvent,
  BaseSyntheticEvent,
} from 'react';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';

import getGallery from '../../contentful/getGallery';
import { ImageModal } from '../imageModal';
import { NoPageFound } from '../noPageFound/NoPageFound';
import { IGalleryImage } from '../../types';
import { LockRightClick } from '../helpers';
import { useActiveGalleryContext } from '../../context/activeGallery';

export const Gallery = () => {
  const context = useActiveGalleryContext();
  const params = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);
  const [gallery, setGallery] = useState<IGalleryImage[]>([]);

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

  const handleContextMenu = (event: MouseEvent) => {
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

  const openImageModal = (image: BaseSyntheticEvent) => {
    if (!mediaQueryMobile) return;
    const getImageUrl = image.target.src;

    setModalImage(getImageUrl);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const getEntries = async () => {
      setGallery([]);
      const gallery = await getGallery(params.id as string);
      if (gallery?.length === 0 || gallery === undefined) {
        context.handleActiveLink('');
        return;
      }
      setGallery(gallery[0].galleryImages);
      context.handleActiveLink(gallery[0].title);
    };
    getEntries();
  }, [context, params]);

  const imageVariant = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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
            {gallery.length === 0 ? (
              <></>
            ) : (
              <ImageList
                variant="masonry"
                cols={mediaQueryMobile ? 3 : 1}
                gap={4}
              >
                {gallery.map((image: IGalleryImage, index: number) => (
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
