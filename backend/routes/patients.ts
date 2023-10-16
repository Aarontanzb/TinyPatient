import express from 'express';
import patientController from '../controllers/patientController';

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', patientController.getPatients);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', patientController.createPatient);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.delete('/:id', patientController.deletePatient);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.put('/:id', patientController.updatePatient);

export default router;