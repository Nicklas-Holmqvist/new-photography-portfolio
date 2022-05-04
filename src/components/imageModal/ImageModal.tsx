import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import BackIcon from '../utils/icons/backIcon.png';
import ForwardIcon from '../utils/icons/forwardIcon.png';
import { IGallery } from '../gallery';
import { LockRightClick } from '../helpers';

export const ImageModal = (props: {
  image: any;
  open: boolean;
  handleClose: any;
  imageGallery: IGallery[];
  handleModalCarousele: any;
}) => {
  const [isImageLandscape, setIsImageLandscape] = useState<boolean | undefined>(
    undefined
  );
  const [hideImage, setHideImage] = useState<boolean>(false);
  const minWidth = useMediaQuery('(min-width:940px)');
  const style = {
    modalContainer: {},
    imageContainer: {
      maxWidth: 1200,
      width: '100%',
      margin: 'auto',
      padding: '0 1rem',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    image: {
      opacity: hideImage ? 0 : 1,
      maxWidth: 1200,
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'ease',
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

  const imageAspect = (event: any) => {
    const image: HTMLImageElement = event.target;
    const imageHeight = image.offsetHeight;
    const imageWidth = image.offsetWidth;
    if (imageHeight < imageWidth) return setIsImageLandscape(false);
    if (imageHeight === imageWidth && !minWidth)
      return setIsImageLandscape(false);
    else return setIsImageLandscape(true);
  };

  return (
    <Grid container position="relative" style={style.modalContainer}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
        sx={{ bgcolor: 'rgba(0,0,0, 0.8)' }}
      >
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          item
          style={style.imageContainer}
          position="absolute"
          onContextMenu={handleContextMenu}
        >
          <LockRightClick contextMenu={contextMenu} handleClose={handleClose} />
          <motion.div
            style={{
              cursor: 'pointer',
              top: 0,
              right: 8,
              marginTop: -36,
              position: 'absolute',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <CloseIcon
              sx={{
                color: 'white',
                fontSize: 36,
              }}
              onClick={props.handleClose}
            />
          </motion.div>
          <motion.div
            style={{ cursor: 'pointer' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img
              id={props.image.id}
              src={BackIcon}
              alt="back"
              onClick={(e) => {
                props.handleModalCarousele(e);
              }}
              style={{
                color: 'white',
                paddingRight: '2rem',
                cursor: 'pointer',
              }}
            />
          </motion.div>
          <motion.div
            style={style.image}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <img
              id={props.image.id}
              src={props.image.imagePath}
              alt="forward"
              loading="lazy"
              height={isImageLandscape ? '100%' : 'fit'}
              width={isImageLandscape ? 'fit' : '100%'}
              onLoad={imageAspect}
            />
          </motion.div>
          <motion.div
            style={{ cursor: 'pointer' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img
              id={props.image.id}
              src={ForwardIcon}
              alt="forward"
              loading="lazy"
              onClick={(e) => {
                props.handleModalCarousele(e);
              }}
              style={{ color: 'white', paddingLeft: '2rem', cursor: 'pointer' }}
            />
          </motion.div>
        </Grid>
      </Modal>
    </Grid>
  );
};
