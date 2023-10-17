import axios from "axios";
import { NewPatient, Patient } from "../../types";

const baseApiUrl = 'https://tinypatient.onrender.com/api';
const apiEndpoint = process.env.NODE_ENV === 'test' ? 'testing' : 'patients';

const apiBaseUrl = `${baseApiUrl}/${apiEndpoint}`;

const getAll = async () => {
    console.log('getAll');
    const { data } = await axios.get<Patient[]>(
      `${apiBaseUrl}`
    );
  
    return data;
  };

const addNew = async (patient: Patient) => {
    const { data } = await axios.post<NewPatient>(
      `${apiBaseUrl}`,
      patient
    );
  
    return data;
  };

const deletePatient = async (id: string) => {
    const { data } = await axios.delete<Patient>(
      `${apiBaseUrl}/${id}`
    );
  
    return data;
};

const editPatient = async (patient: Patient) => {
    const { data } = await axios.put<Patient>(
      `${apiBaseUrl}/${patient._id}`,
      patient
    );
  
    return data;
};

export default { getAll, addNew, deletePatient, editPatient };