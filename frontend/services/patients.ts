import axios from "axios";
import { Patient } from "../../types";

const apiBaseUrl = 'http://localhost:3001/api';

const getAll = async () => {
    const { data } = await axios.get<Patient[]>(
      `${apiBaseUrl}/patients`
    );
  
    return data;
  };

export default { getAll };