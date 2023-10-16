import patientData from '../data';
import { Patient } from '../../types';

const getAll = (): Patient[] => patientData;

const addNew = (patient: Patient): Patient => {
  patientData.push(patient);
  return patient;
};

const deletePatient = (id: string): Patient => {
  const patient = patientData.find(p => p.id === id);
  if (patient) {
    patientData.splice(patientData.indexOf(patient), 1);
  }
  return patient as Patient;
};

export default { getAll, addNew, deletePatient };