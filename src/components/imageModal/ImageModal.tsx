import React from 'react';
import { IGallery } from '../gallery';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
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
  // console.log(props.image);

  // const goBack = (id: any) => {
  //   const imageId = id.target.id;
  //   const imageIndex = props.imageGallery.findIndex(
  //     (e) => e.id == id.target.id
  //   );
  //   if (imageIndex <= 0) return;
  //   console.log({ BACK: imageIndex });
  // };

  // const goForward = (id: any) => {
  //   console.log({ FORWARD: id.target.id });
  // };
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
          item
          style={style.imageContainer}
          position="absolute"
        >
          <h2
            id={props.image.id}
            title="back"
            onClick={props.handleModalCarousele}
          >
            BAK
          </h2>
          <img
            src={props.image.imagePath}
            alt={props.image.imageAlt}
            loading="lazy"
            style={style.image}
          />
          <h2
            id={props.image.id}
            title="forward"
            onClick={props.handleModalCarousele}
          >
            FRAMÅT
          </h2>
        </Grid>
      </Modal>
    </Grid>
  );
};
