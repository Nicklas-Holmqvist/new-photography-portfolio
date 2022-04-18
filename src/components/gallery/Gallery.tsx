import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageModal } from '../imageModal';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../utils/icons/backIconBlack.png';

export interface IGallery {
  id: number;
  imagePath: string;
  imageAlt: string;
  gallery: string;
}

export const Gallery = () => {
  const params = useParams();
  const [updateGallery, setUpdateGallery] = useState('');
  const [showGallery, setShowGallery] = useState<IGallery[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');
  const gallery: IGallery[] = [
    {
      id: 1,
      imagePath: '/assets/fonster.png',
      imageAlt: 'old-builing-1',
      gallery: 'oldBuildings',
    },
    {
      id: 2,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'old-builing-2',
      gallery: 'oldBuildings',
    },
    {
      id: 3,
      imagePath: '/assets/fonster.png',
      imageAlt: 'old-builing-3',
      gallery: 'oldBuildings',
    },
    {
      id: 4,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'old-builing-4',
      gallery: 'oldBuildings',
    },
    {
      id: 5,
      imagePath: '/assets/fonster.png',
      imageAlt: 'old-builing-5',
      gallery: 'oldBuildings',
    },
    {
      id: 6,
      imagePath: '/assets/fonster.png',
      imageAlt: 'old-builing-6',
      gallery: 'oldBuildings',
    },
    {
      id: 7,
      imagePath: '/assets/fonster.png',
      imageAlt: 'old-builing-7',
      gallery: 'oldBuildings',
    },
    {
      id: 8,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-1',
      gallery: 'landscape',
    },
    {
      id: 9,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-2',
      gallery: 'landscape',
    },
    {
      id: 10,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-3',
      gallery: 'landscape',
    },
    {
      id: 11,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-4',
      gallery: 'landscape',
    },
    {
      id: 12,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-5',
      gallery: 'landscape',
    },
    {
      id: 13,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-6',
      gallery: 'landscape',
    },
    {
      id: 14,
      imagePath: '/assets/trees.jpg',
      imageAlt: 'landscape-7',
      gallery: 'landscape',
    },
  ];

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
  };

  useEffect(() => {
    if (params.id === updateGallery) return;
    setShowGallery([]);
    setUpdateGallery(params.id!);
  }, [params]);

  useEffect(() => {
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
    <Grid container style={style.container}>
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
        onClick={() => navigate('/')}
      >
        <img
          src={BackIcon}
          alt="back"
          style={{
            height: '1rem',
            width: '.5rem',
            paddingRight: '0.8rem',
            marginTop: '-2px',
            cursor: 'pointer',
          }}
        />
        <Typography style={style.link}>Gå tillbaka</Typography>
      </Grid>
      <ImageList variant="masonry" cols={2} gap={0}>
        {showGallery.map((item) => (
          <>
            <ImageListItem key={Number(item.id)}>
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
