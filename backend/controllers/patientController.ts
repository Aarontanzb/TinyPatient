import patientModel from "../models/patientModel";
import { Request, Response } from 'express';

// get all patients from db
const getPatients = async (_req: Request, res: Response) => {
    const patients = await patientModel.find({}).sort({createdAt: -1});
    res.send(patients);
};

// add new patient to db
const createPatient = async (req: Request, res: Response) => {
    try {
        const newPatient = await patientModel.create(req.body);
        res.send(newPatient);
      } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
      }
};

// delete patient from db
const deletePatient = async (req: Request, res: Response) => {
    try {
        const deletedPatient = await patientModel.findByIdAndDelete(req.params.id);
        res.send(deletedPatient);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
      }
};

export default { createPatient, getPatients, deletePatient };
