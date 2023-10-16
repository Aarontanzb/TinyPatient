import patientData from '../data';
import { Patient } from '../../types';

const getAll = () => patientData;


const deletePatient = (id: string): Patient => {
  const patient = patientData.find(p => p._id === id);
  if (patient) {
    patientData.splice(patientData.indexOf(patient), 1);
  }
  return patient as Patient;
};

export default { getAll, deletePatient };