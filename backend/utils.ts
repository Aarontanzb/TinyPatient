import { Patient } from "../types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };
  const parseString = (value: unknown, what: string): string => {
    if ( isString(value)) {
      return value;
    }
    throw new Error(`Value of ${what} incorrect: ${value}`);
  };

export const newPatient = (object: unknown): Patient=> {
    if (!object || typeof object !== 'object') {
      throw new Error('Data missing or in wrong format');
    }
    if ( !('id' in object)) throw new Error('id missing');
    if ( !('first' in object)) throw new Error('first missing');
    if ( !('last' in object)) throw new Error('last missing');

    const info = 'info' in object ? parseString(object.info, 'info') : undefined;
  
    return {
      id: parseString(object.id, 'id'),
      first: parseString(object.first, 'first'),
      last: parseString(object.last, 'last'),
      info,
    };
  };