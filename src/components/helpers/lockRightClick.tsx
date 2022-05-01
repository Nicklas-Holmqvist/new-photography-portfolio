import { Menu, Typography } from '@mui/material';
import React from 'react';

interface ILockRightClick {
  contextMenu: {
    mouseX: number;
    mouseY: number;
  } | null;
  handleClose: () => void;
}

export const LockRightClick = (props: ILockRightClick) => {
  return (
    <Menu
      sx={{ border: 'none' }}
      open={props.contextMenu !== null}
      onClose={props.handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        props.contextMenu !== null
          ? { top: props.contextMenu.mouseY, left: props.contextMenu.mouseX }
          : undefined
      }
    >
      <Typography sx={{ py: 0, px: 2 }} onClick={props.handleClose}>
        Den är inte din!
      </Typography>
    </Menu>
  );
};
