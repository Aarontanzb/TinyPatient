export interface Patient {
    _id: string;
    first: string;
    last: string;
    info?: string;
  }

export type NewPatient = Omit<Patient, '_id'>;