import { Types } from 'mongoose';

export interface Patient {
    _id: Types.ObjectId;
    first: string;
    last: string;
    info?: string;
  }