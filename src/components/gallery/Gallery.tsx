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
import { Grid, ImageList, Typography } from '@mui/material';

import getGallery from '../../contentful/getGallery';
import { Image } from './component';
import { ImageModal } from '../imageModal';
import { NoPageFound } from '../noPageFound/NoPageFound';
import { IGalleryImage, IMeta } from '../../types';
import { LockRightClick } from '../helpers';
import { useActiveGalleryContext } from '../../context/activeGallery';

export const Gallery = () => {
  const context = useActiveGalleryContext();
  const params = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');
  const [gallery, setGallery] = useState<IGalleryImage[]>([]);
  const [meta, setMeta] = useState<IMeta>();

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

  const imageVariant = {
    initial: { y: -5, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 0, opacity: 0 },
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
      setMeta(gallery[0].meta);
      context.handleActiveLink(gallery[0].path);
    };
    getEntries();
  }, [context, params]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.content} />
      </Helmet>
      {context.noGallery ? (
        <NoPageFound />
      ) : (
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
                  key={index}
                  variants={imageVariant}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: index * 0.01,
                    duraction: index * 0.01,
                  }}
                  onContextMenu={handleContextMenu}
                >
                  <LockRightClick
                    contextMenu={contextMenu}
                    handleClose={handleClose}
                  />
                  <Image image={image} handleModal={openImageModal} />
                </motion.div>
              ))}
            </ImageList>
          )}
        </Grid>
      )}
    </motion.div>
  );
};
