import axios from "axios";
import { Patient } from "../../types";

const apiBaseUrl = 'http://localhost:3001/api';

const getAll = async () => {
    const { data } = await axios.get<Patient[]>(
      `${apiBaseUrl}/patients`
    );
  
    return data;
  };

const addNew = async (patient: Patient) => {
    const { data } = await axios.post<Patient>(
      `${apiBaseUrl}/patients`,
      patient
    );
  
    return data;
  };

const deletePatient = async (id: string) => {
    const { data } = await axios.delete<Patient>(
      `${apiBaseUrl}/patients/${id}`
    );
  
    return data;
};

export default { getAll, addNew, deletePatient };