import patientData from '../data';
import { Patient } from '../../types';

const getAll = (): Patient[] => patientData;

const addNew = (patient: Patient): Patient => {
  patientData.push(patient);
  return patient;
};

export default { getAll, addNew };