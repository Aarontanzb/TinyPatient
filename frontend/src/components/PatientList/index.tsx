import React, { useState } from 'react';
import { Box, Table, Button, TableHead, Typography, TableCell, TableRow, TableBody } from '@mui/material';
import { Patient } from '../../../../types';
import AddPatientModal from '../AddPatientModal';
import { v4 as uuidv4 } from 'uuid';
import patientService from '../../../services/patients';

interface Props {
    patients: Patient[];
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
  }
  
const PatientList = ({ patients, setPatients }: Props) => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  
  const handleAddPatient = async (data: Patient) => {
    try {
        const patient = await patientService.addNew(data);
        setPatients(patients.concat(patient));    
        setModalOpen(false);
    } catch (error) {
        console.error(error);
    }
  };

  const handleDeletePatient = async (id: string) => {
    try {
        patientService.deletePatient(id);
        setPatients(patients.filter(patient => patient.id !== id));
    } catch (error) {
        console.error(error);
    }
  };
  
  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#F0F0F0'}}>
      <Box sx={{width: '80%', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)'}}>
        <Box sx={{height: '30px'}}></Box>
        <Typography variant="h4" align="center" sx={{color: '#333333'}}>Tiny Patient</Typography>
        <Box sx={{height: '80px'}}></Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell> {/* Empty TableCell for spacing */}
              <TableCell sx={{color: '#333333'}}>First Name</TableCell>
              <TableCell sx={{color: '#333333'}}>Last Name</TableCell>
              <TableCell sx={{color: '#333333'}}>Info</TableCell>
              <TableCell></TableCell> {/* Empty TableCell for Delete Button */}
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={uuidv4()}>
                <TableCell></TableCell> {/* Empty TableCell for spacing */}
                <TableCell sx={{color: '#333333'}}>{patient.first}</TableCell>
                <TableCell sx={{color: '#333333'}}>{patient.last}</TableCell>
                <TableCell sx={{color: '#333333', paddingRight: '10px'}}>{patient.info}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => {handleDeletePatient(patient.id);}}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Button variant="contained" onClick={() => {setModalOpen(true);}} sx={{backgroundColor: '#4caf50', color: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginBottom: '50px'}}>Add Patient</Button>
        </Box>
        <AddPatientModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddPatient} />
      </Box>
    </Box>
  );
};

export default PatientList;
