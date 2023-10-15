import PatientList from './components/PatientList';

function App() {
  return (
    <>
      <div className="patient-list">
        <PatientList patients={[]} setPatients={() => {}} />
      </div>
    </>
  );
}

export default App;
