import { Typography } from '@mui/material';
import React from 'react';
import { Category } from './index';

export const Content = () => {
  const categories = [
    {
      title: 'Landskap',
      information: 'Information',
      imagePath: '/assets/trees.jpg',
      imageAlt: 'imageAlt',
      reverse: false,
    },
    {
      title: 'Gamla byggnader',
      information: 'Information',
      imagePath: '/assets/fonster.png',
      imageAlt: 'imageAlt',
      reverse: true,
    },
  ];

  return (
    <>
      <Typography>Content</Typography>
      {categories.map((category) => (
        <Category
          title={category.title}
          information={category.information}
          imagePath={category.imagePath}
          imageAlt={category.imagePath}
          position={category.reverse}
        />
      ))}
    </>
  );
};
