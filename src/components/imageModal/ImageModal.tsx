import React from 'react';
import { IGallery } from '../gallery';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import BackIcon from '../utils/icons/backIcon.png';
import ForwardIcon from '../utils/icons/forwardIcon.png';

export const ImageModal = (props: {
  image: any;
  open: boolean;
  handleClose: any;
  imageGallery: IGallery[];
  handleModalCarousele: any;
}) => {
  const style = {
    modalContainer: {},
    imageContainer: {
      maxWidth: 1200,
      width: '70%',
      margin: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    image: {
      width: '100%',
    },
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
        >
          <img
            id={props.image.id}
            src={BackIcon}
            alt="back"
            onClick={props.handleModalCarousele}
            style={{ color: 'white', paddingRight: '1rem', cursor: 'pointer' }}
          />
          <img
            src={props.image.imagePath}
            alt={props.image.imageAlt}
            loading="lazy"
            style={style.image}
          />
          <img
            id={props.image.id}
            src={ForwardIcon}
            alt="forward"
            onClick={props.handleModalCarousele}
            style={{ color: 'white', paddingLeft: '1rem', cursor: 'pointer' }}
          />
        </Grid>
      </Modal>
    </Grid>
  );
};
