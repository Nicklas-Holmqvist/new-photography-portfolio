import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import BackIcon from '../utils/icons/backIcon.png';
import ForwardIcon from '../utils/icons/forwardIcon.png';
import { IGallery } from '../gallery';
import { LockRightClick } from '../helpers';

export const ImageModal = (props: {
  image: any;
  open: boolean;
  handleClose: any;
  imageGallery: IGallery[];
}) => {
  const [modalImage, setModalImage] = useState<any>('');

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
      maxWidth: 1200,
      width: '100%',
      height: '80vh',
      backgroundImage: `url(${modalImage.imagePath})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
  };

  const handleModalCarousele = (id: any) => {
    const imageIndex = props.imageGallery.findIndex(
      (e) => e.id === Number(id.target.id)
    );
    if (id.target.alt === 'back') {
      if (imageIndex <= 0) return;
      setModalImage(props.imageGallery[imageIndex - 1]);
    } else {
      if (imageIndex >= props.imageGallery.length - 1) return;
      setModalImage(props.imageGallery[imageIndex + 1]);
    }
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

  useEffect(() => {
    setModalImage(props.image);
  }, [props.image]);

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
              id={modalImage.id}
              src={BackIcon}
              alt="back"
              onClick={(e) => handleModalCarousele(e)}
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
          ></motion.div>
          <motion.div
            style={{ cursor: 'pointer' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img
              id={modalImage.id}
              src={ForwardIcon}
              alt="forward"
              loading="lazy"
              onClick={(e) => handleModalCarousele(e)}
              style={{ color: 'white', paddingLeft: '2rem', cursor: 'pointer' }}
            />
          </motion.div>
        </Grid>
      </Modal>
    </Grid>
  );
};
