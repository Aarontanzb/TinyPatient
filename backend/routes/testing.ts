import express from 'express';
import testingController from './../controllers/testingController';

const testingRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
testingRouter.post('/reset', testingController.resetPatients);

export default testingRouter;