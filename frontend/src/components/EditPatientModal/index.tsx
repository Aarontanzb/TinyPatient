import React, { useRef } from 'react';
import { Modal, TextField, Button, Box, useTheme } from '@mui/material';
import { Patient } from '../../../../types';

interface Edit {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Patient) => void;
    patient: Patient;
  }

export const EditPatientModal: React.FC<Edit> = ({ open, onClose, onSubmit, patient }) => {
  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const infoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (firstRef.current && lastRef.current) {
      const data: Patient = {
        _id: patient._id,
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
        <h2>Edit Patient Entry</h2>
        <form noValidate autoComplete="off">
          <TextField required label="First" variant="outlined" fullWidth inputRef={firstRef} defaultValue={patient.first}/>
          <TextField required label="Last" variant="outlined" fullWidth style={{ marginTop: '20px' }} inputRef={lastRef} defaultValue={patient.last}/>
          <TextField label="Info" variant="outlined" fullWidth style={{ marginTop: '20px' }} inputRef={infoRef} defaultValue={patient.info}/>
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleSubmit}>
            Edit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditPatientModal;