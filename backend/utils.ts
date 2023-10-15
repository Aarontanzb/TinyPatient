import { Patient } from "../types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

const parseFirst = (first: unknown): string => {
  if (!first || !isString(first)) {
    throw new Error('Incorrect or missing first name');
  }

  return first;
};

const parseLast = (last: unknown): string => {
    if (!last || !isString(last)) {
      throw new Error('Incorrect or missing last name');
    }
  
    return last;
};

const parseInfo = (info: unknown): string => {
    if (!info || !isString(info)) {
      throw new Error('Incorrect or missing info');
    }
  
    return info;
};

export const newPatient = (object: unknown): Patient=> {
    if (!object || typeof object !== 'object') {
      throw new Error('Data missing or in wrong format');
    }
  
    if ( !('first' in object)) throw new Error('first missing');
    if ( !('last' in object)) throw new Error('last missing');
    if ( !('info' in object)) throw new Error('info missing');
  
    return {
      first: parseFirst(object.first),
      last: parseLast(object.last),
      info: parseInfo(object.info),
    };
  };