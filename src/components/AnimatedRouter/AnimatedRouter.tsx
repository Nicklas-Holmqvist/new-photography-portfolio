import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Gallery } from '../gallery';
import { LandingPage } from '../landingPage';
import { NoPageFound } from '../noPageFound';

export const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gallery/:id" element={<Gallery />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};
