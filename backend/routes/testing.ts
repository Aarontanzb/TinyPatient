import express from 'express';
import testingController from '../controllers/testingController';

const testingRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
testingRouter.post('/reset', testingController.resetPatients);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
testingRouter.get('/', testingController.getPatients);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
testingRouter.post('/', testingController.createPatient);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
testingRouter.delete('/:id', testingController.deletePatient);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
testingRouter.put('/:id', testingController.updatePatient);

export default testingRouter;