import React, { useState } from 'react';
import { Box, Table, Button, TableHead, Typography, TableCell, TableRow, TableBody } from '@mui/material';
import { Patient } from '../../../../types';

interface Props {
    patients: Patient[];
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
  }
  

const PatientList = ({ patients, setPatients }: Props) => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleAddPatient = () => {
    // Add the patient to the patients state
    const newPatient: Patient = {
      first: "New",
      last: "Patient",
      info: "New patient info"
    };
    setPatients([...patients, newPatient]);
    setModalOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4">Patient List</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow>
              <TableCell>{patient.first}</TableCell>
              <TableCell>{patient.last}</TableCell>
              <TableCell>{patient.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={() => {handleAddPatient(); setModalOpen(true);}}>Add Patient</Button>
    </Box>
  );
};

export default PatientList;
