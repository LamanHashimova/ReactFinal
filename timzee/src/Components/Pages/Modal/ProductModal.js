import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import CustomModal from './CustomModal';

function ProductModal ({ open, onClose, productId  }) {
  window.scrollTo(0, 0);
  return (
    <Modal key={productId}
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
     <CustomModal 
        productId={productId}
        onClose={onClose}
      />
  </Modal>
  );
}

export default ProductModal