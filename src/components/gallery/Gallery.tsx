import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageModal } from '../imageModal';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { gallery } from './images';
import { galleryInformation } from './galleryInformation';

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
}

export const Gallery = () => {
  const params = useParams();
  const [updateGallery, setUpdateGallery] = useState('');
  const [showGallery, setShowGallery] = useState<IGallery[]>([]);
  const [information, setInformation] = useState<IGalleryInformation[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');

  const navigate = useNavigate();

  const style = {
    container: {
      maxWidth: 1200,
      width: '100%',
      paddingTop: '6rem',
      margin: 'auto',
    },
    link: {
      cursor: 'pointer',
    },
    image: {
      cursor: 'pointer',
      background: 'rgba(0, 0, 0, 0.8)',
      '&:hover': {
        backgroundColor: 'rgba(244, 244, 244, 0.8)',
      },
    },
  };

  useEffect(() => {
    if (params.id === updateGallery) return;
    setShowGallery([]);
    setUpdateGallery(params.id!);
  }, [params]);

  useEffect(() => {
    setInformation(
      galleryInformation.filter((item) => item.gallery === updateGallery)
    );
    setShowGallery(gallery.filter((item) => item.gallery === updateGallery));
  }, [updateGallery]);

  const openImageModal = (e: any) => {
    const target = e.target;
    const image: IGallery = {
      id: target.id,
      imagePath: target.srcset.split('?')[0],
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
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={style.link}
        onClick={() => navigate('/')}
      >
        <ArrowBackIosNewIcon sx={{ pr: 1, fontSize: 16 }} />
        <Typography>Gå tillbaka</Typography>
      </Grid>
      {information.map((item) => (
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ py: 6 }}
        >
          <Typography variant="h3">{item.title}</Typography>
          <Typography sx={{ width: '84ch', pt: 2 }} key={item.gallery}>
            {item.information}
          </Typography>
        </Grid>
      ))}
      <ImageList variant="masonry" cols={3} gap={4}>
        {showGallery.map((item) => (
          <>
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
          </>
        ))}
      </ImageList>
    </Grid>
  );
};
