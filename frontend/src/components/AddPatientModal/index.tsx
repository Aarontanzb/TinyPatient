import React, { useRef } from 'react';
import { Modal, TextField, Button, Box, useTheme } from '@mui/material';
import { Patient } from '../../../../types';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Patient) => void;
}

export const AddPatientModal: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const infoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (firstRef.current && lastRef.current) {
      const data: Patient = {
        first: firstRef.current.value,
        last: lastRef.current.value,
      };
      if (infoRef.current) {
        data.info = infoRef.current.value;
      }
      onSubmit(data);
    }
  };

  const theme = useTheme();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: theme.shadows[3],
        p: 4,
        borderRadius: theme.shape.borderRadius,
      }}
    >
        <h2>Add Patient Entry</h2>
        <form noValidate autoComplete="off">
          <TextField required label="First" variant="outlined" fullWidth inputRef={firstRef} />
          <TextField required label="Last" variant="outlined" fullWidth style={{ marginTop: '20px' }} inputRef={lastRef} />
          <TextField label="Info" variant="outlined" fullWidth style={{ marginTop: '20px' }} inputRef={infoRef} />
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleSubmit}>
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddPatientModal;