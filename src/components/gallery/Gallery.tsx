import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

export interface IGallery {
  imagePath: string;
  imageAlt: string;
  featured: number;
  gallery: string;
}

export const Gallery = (props: { gallery: string | undefined }) => {
  const gallery: IGallery[] = [
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 2,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 2,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 2,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'gamlaByggnader',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'landskap',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 2,
      gallery: 'landskap',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'landskap',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'landskap',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 2,
      gallery: 'landskap',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 2,
      gallery: 'landskap',
    },
    {
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      featured: 1,
      gallery: 'landskap',
    },
  ];

  const selectedGallery = gallery.filter(
    (item) => item.gallery === props.gallery
  );

  return (
    <ImageList variant="masonry" cols={2} gap={0}>
      {selectedGallery.map((item) => (
        <ImageListItem key={item.imagePath}>
          <img
            src={`${item.imagePath}?w=248&fit=crop&auto=format`}
            srcSet={`${item.imagePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.imagePath}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
