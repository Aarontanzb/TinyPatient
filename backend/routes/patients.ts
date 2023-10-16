import patientService from '../services/patientService';
import { newPatient } from '../utils';
import patientModel from '../models/patientModel';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getAll());
  });

  router.post('/', async (req, res) => {
    try {
      const newPatient = newPatient(req.body);
      const patient = new patientModel(req.body);
      const addedPatient = await patient.save();
      res.status(201).send(addedPatient);
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