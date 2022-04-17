import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IGallery {
  imagePath: string;
  imageAlt: string;
  featured: number;
  gallery: string;
}

export const Gallery = () => {
  const params = useParams();
  const [updateGallery, setUpdateGallery] = useState('');
  const [showGallery, setShowGallery] = useState<IGallery[]>([]);
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

  useEffect(() => {
    setShowGallery([]);
    setUpdateGallery(params.id!);
  }, [params]);
  useEffect(() => {
    setShowGallery(gallery.filter((item) => item.gallery === updateGallery));
  }, [updateGallery]);

  console.log(showGallery);

  return (
    <ImageList variant="masonry" cols={2} gap={0}>
      {showGallery.map((item) => (
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
