import axios from "axios";
import { NewPatient, Patient } from "../../types";

const apiBaseUrl = 'https://tinypatient.onrender.com/api';

const getAll = async () => {
    const { data } = await axios.get<Patient[]>(
      `${apiBaseUrl}/patients`
    );
  
    return data;
  };

const addNew = async (patient: Patient) => {
    const { data } = await axios.post<NewPatient>(
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

const editPatient = async (patient: Patient) => {
    const { data } = await axios.put<Patient>(
      `${apiBaseUrl}/patients/${patient._id}`,
      patient
    );
  
    return data;
};

export default { getAll, addNew, deletePatient, editPatient };