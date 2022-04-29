import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageModal } from '../imageModal';
import { gallery } from './images';
import { useHeaderContext } from '../../context/header';
import { motion } from 'framer-motion';

export interface IGallery {
  id: number;
  imagePath: string;
  imageAlt: string;
  gallery: string;
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
  const context = useHeaderContext();
  const params = useParams();
  const [updateGallery, setUpdateGallery] = useState('');
  const [showGallery, setShowGallery] = useState<IGallery[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');

  const mediaQueryMobile = useMediaQuery('(min-width:600px)');

  const navigate = useNavigate();

  const style = {
    container: {
      maxWidth: 1400,
      width: '100%',
      paddingTop: '6rem',
      margin: 'auto',
    },
    link: {
      cursor: 'pointer',
    },
    image: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(244, 244, 244, 0.8)',
      },
    },
  };

  useEffect(() => {
    if (params.id === updateGallery) return;
    setShowGallery([]);
    setUpdateGallery(params.id!);
    context.handleActiveLink(params.id);
  }, [context, params, updateGallery]);

  useEffect(() => {
    setShowGallery(gallery.filter((item) => item.gallery === updateGallery));
  }, [updateGallery]);

  const openImageModal = (e: any) => {
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

  const handleModalCarousele = (id: any) => {
    const imageIndex = showGallery.findIndex(
      (e) => e.id === Number(id.target.id)
    );
    if (id.target.alt === 'back') {
      if (imageIndex <= 0) return;
      setModalImage(showGallery[imageIndex - 1]);
    } else {
      if (imageIndex >= showGallery.length - 1) return;
      setModalImage(showGallery[imageIndex + 1]);
    }
  };

  const imageVariant = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Grid
      container
      style={style.container}
      display="flex"
      flexDirection="column"
    >
      {openModal && (
        <ImageModal
          image={modalImage}
          open={openModal}
          handleClose={closeModal}
          imageGallery={showGallery}
          handleModalCarousele={handleModalCarousele}
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
          >
            <ImageListItem key={Number(item.id)} style={style.image}>
              <img
                src={`${item.imagePath}?w=248&fit=crop&auto=format`}
                srcSet={`${item.imagePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.imageAlt}
                id={item.id.toString()}
                loading="lazy"
                title={item.gallery}
                onClick={openImageModal}
              />
            </ImageListItem>
          </motion.div>
        ))}
      </ImageList>
    </Grid>
  );
};
