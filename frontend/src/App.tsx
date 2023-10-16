import { useState, useEffect } from 'react';
import PatientList from './components/PatientList';
import patientService from "../services/patients";
import { Patient } from '../../types';

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    };
    
    void fetchInitialData();
  }, []);
  return (
    <>
      <div className="patient-list">
        <PatientList patients={patients} setPatients={setPatients} />
      </div>
    </>
  );
}

export default App;
