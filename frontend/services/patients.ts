import axios from "axios";
import { NewPatient, Patient } from "../../types";

const baseApiUrl = process.env.NODE_ENV === 'test' ? 'http://localhost:3001/api/testing' : 'https://tinypatient.onrender.com/patients';

const getAll = async () => {
    const { data } = await axios.get<Patient[]>(
      `${baseApiUrl}`
    );
  
    return data;
  };

const addNew = async (patient: Patient) => {
    const { data } = await axios.post<NewPatient>(
      `${baseApiUrl}`,
      patient
    );
  
    return data;
  };

const deletePatient = async (id: string) => {
    const { data } = await axios.delete<Patient>(
      `${baseApiUrl}/${id}`
    );
  
    return data;
};

const editPatient = async (patient: Patient) => {
    const { data } = await axios.put<Patient>(
      `${baseApiUrl}/${patient._id}`,
      patient
    );
  
    return data;
};

export default { getAll, addNew, deletePatient, editPatient };