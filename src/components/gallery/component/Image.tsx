import {
  CircularProgress,
  Grid,
  ImageListItem,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { IGalleryImage } from '../../../types';

export const Image = (props: {
  image: IGalleryImage;
  handleModal: (e: any) => void;
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const mediaQueryMobile = useMediaQuery('(min-width:600px)');
  return (
    <>
      <ImageListItem
        sx={{
          cursor: mediaQueryMobile ? 'pointer' : 'default',
        }}
      >
        <img
          src={`https:${props.image.file.url}`}
          srcSet={`https:${props.image.file.url}`}
          alt={props.image.title}
          loading="lazy"
          onClick={props.handleModal}
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'all',
          }}
        />
      </ImageListItem>
    </>
  );
};
