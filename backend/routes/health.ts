import express from 'express';
import healthController from '../controllers/healthController';

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', healthController.getHealth);

export default router;