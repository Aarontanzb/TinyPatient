import express from 'express';
import patientService from '../services/patientService';
import { newPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getAll());
  });

router.post('/', (req, res) => {
  try {
    const Patient = newPatient(req.body);
    const addedPatient = patientService.addNew(Patient);
    res.send(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }

});

router.delete('/:id', (req, res) => {
  try {
    const deletedPatient = patientService.deletePatient(req.params.id);
    res.send(deletedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;