import patientModel from "../models/patientModel";
import { Request, Response } from 'express';

// reset patients in db for testing
const resetPatients = async (_req: Request, res: Response) => {
    try {
        await patientModel.deleteMany({});
        res.status(204).end();
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
};

export default { resetPatients };