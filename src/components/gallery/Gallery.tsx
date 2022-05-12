import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';

import { gallery } from '../utils/images';
import { IGallery } from '../../types';
import { ImageModal } from '../imageModal';
import { NoPageFound } from '../noPageFound/NoPageFound';
import { LockRightClick } from '../helpers';
import { useHeaderContext } from '../../context/gallery';
import { galleryInformation } from '../utils/text/galleryInformation';

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
  const context = useHeaderContext();
  const params = useParams();
  const [updateGallery, setUpdateGallery] = useState('');
  const [showGallery, setShowGallery] = useState<IGallery[]>([]);
  const [galleryTitle, setGalleryTitle] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');
  const [loaded, setLoaded] = useState<boolean>(false);

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
    if (params.id === updateGallery) return;
    setShowGallery([]);
    setUpdateGallery(params.id!);
    context.handleActiveLink(params.id);
  }, [context, params, updateGallery]);

  useEffect(() => {
    const galleryTitle = galleryInformation.filter(
      (item) => item.gallery === params.id
    );
    setShowGallery(gallery.filter((item) => item.gallery === updateGallery));
    if (galleryTitle.length <= 0) return setGalleryTitle('Ingenting!');
    setGalleryTitle(galleryTitle[0].title);
  }, [params.id, updateGallery]);

  const imageVariant = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Helmet>
        <title>Galleri {galleryTitle} | nicklasholmqvist.se</title>
        <meta name="galleri" content="Fotogalleri av Nicklas Holmqvist" />
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

          <ImageList variant="masonry" cols={mediaQueryMobile ? 3 : 1} gap={4}>
            {showGallery.map((item, i) => (
              <motion.div
                variants={imageVariant}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.01 }}
                onContextMenu={handleContextMenu}
              >
                <LockRightClick
                  contextMenu={contextMenu}
                  handleClose={handleClose}
                />
                <ImageListItem
                  key={Number(item.id)}
                  style={loaded ? {} : { opacity: 0, overflow: 'hidden' }}
                  sx={{
                    cursor: mediaQueryMobile ? 'pointer' : 'default',
                    '&:hover': {
                      transform: 'scale(1.002)',
                    },
                  }}
                >
                  <img
                    src={`${item.imagePath}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.imagePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.imageAlt}
                    id={item.id.toString()}
                    loading="lazy"
                    title={item.gallery}
                    onClick={openImageModal}
                    onLoad={() => setLoaded(true)}
                  />
                </ImageListItem>
              </motion.div>
            ))}
          </ImageList>
        </Grid>
      )}
    </>
  );
};
