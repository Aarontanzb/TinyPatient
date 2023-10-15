import patientData from '../data';
import { Patient } from '../../types';

const getAll = (): Patient[] => patientData;

export default { getAll };