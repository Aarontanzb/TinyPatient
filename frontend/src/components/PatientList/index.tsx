import React, { useState } from 'react';
import { Box, Table, Button, TableHead, Typography, TableCell, TableRow, TableBody } from '@mui/material';
import { Patient } from '../../../../types';
import AddPatientModal from '../AddPatientModal';
import EditPatientModal from '../EditPatientModal';
import { v4 as uuidv4 } from 'uuid';
import patientService from '../../../services/patients';

interface Props {
    patients: Patient[];
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
  }
  
const PatientList = ({ patients, setPatients }: Props) => {

  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  
  const handleAddPatient = async (data: Patient) => {
    try {
      const newPatient = await patientService.addNew(data);
      const patient: Patient = {
        ...newPatient,
        _id: uuidv4(), 
      };
      setPatients(patients.concat(patient));    
      setAddModalOpen(false);
  } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePatient = async (id: string) => {
    try {
        patientService.deletePatient(id);
        setPatients(patients.filter(patient => patient._id !== id));
    } catch (error) {
        console.error(error);
    }
  };

  const handleEditPatient = async (data: Patient) => {
    try {
      console.log(data);
      const updatedPatient = await patientService.editPatient(data);
      console.log('test2');
      setPatients(patients.map(patient => patient._id === updatedPatient._id ? updatedPatient : patient));
      setEditModalOpen(false);
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
              <TableCell sx={{color: '#333333'}}>Actions</TableCell>
              <TableCell></TableCell> {/* Empty TableCell for spacing */}
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
                  <Box sx={{display: 'flex', gap: '10px'}}>
                    <Button variant="contained" color="primary" onClick={() => {setEditModalOpen(true);}}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={() => {handleDeletePatient(patient._id);}}>Delete</Button>
                    <EditPatientModal open={editModalOpen} onClose={() => setEditModalOpen(false)} onSubmit={handleEditPatient} patient={patient}/>
                  </Box>
                </TableCell>
                <TableCell></TableCell> {/* Empty TableCell for spacing */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Button variant="contained" onClick={() => {setAddModalOpen(true);}} sx={{backgroundColor: '#4caf50', color: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginBottom: '50px'}}>Add Patient</Button>
        </Box>
        <AddPatientModal open={addModalOpen} onClose={() => setAddModalOpen(false)} onSubmit={handleAddPatient} />
      </Box>
    </Box>
  );
};

export default PatientList;
