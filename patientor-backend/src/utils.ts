import { NewPatient, Gender, Entry, SickLeave, HealthCheckRating, Diagnosis, BaseEntry, HospitalEntry, HealthCheckEntry, OccupationalHealthcareEntry } from "./types";

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ' + name);
    }
    return name;
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
  };

const parseSsn = (ssn: unknown): string => {
if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn);
}
return ssn;
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation: ' + occupation);
    }
    return occupation;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseEntries = (entries: unknown[]): Entry[] => {
    return entries.map((entry) => {
      if (!isObject(entry)) {
        throw new Error('Incorrect or missing entry: ' + entry);
      }
  
      const baseEntry: BaseEntry = {
        id: parseString((entry as { id: unknown }).id),
        description: parseString((entry as { description: unknown }).description),
        date: parseString((entry as { date: unknown }).date),
        specialist: parseString((entry as { specialist: unknown }).specialist),
        diagnosisCodes: parseDiagnosisCodes((entry as { diagnosisCodes: unknown }).diagnosisCodes)
      };
  
      if (!isEntryType(entry)) {
        throw new Error('Invalid entry type');
      }
  
      const type = (entry as { type: unknown }).type;
  
      switch (type) {
        case "HealthCheck":
          return {
            ...baseEntry,
            type: "HealthCheck",
            healthCheckRating: parseHealthCheckRating((entry as HealthCheckEntry).healthCheckRating)
          };
        case "OccupationalHealthcare":
          return {
            ...baseEntry,
            type: "OccupationalHealthcare",
            employerName: parseString((entry as OccupationalHealthcareEntry).employerName),
            sickLeave: parseSickLeave((entry as OccupationalHealthcareEntry).sickLeave)
          };
        case "Hospital":
          return {
            ...baseEntry,
            type: "Hospital",
            discharge: {
              date: parseString((entry as HospitalEntry).discharge?.date),
              criteria: parseString((entry as HospitalEntry).discharge?.criteria)
            }
          };
        default:
          throw new Error('Invalid entry type: ' + type);
      }
    });
  };
  

  const isEntryType = (entry: unknown): entry is Entry => {
    return (
      (entry as Entry).type === "HealthCheck" ||
      (entry as Entry).type === "OccupationalHealthcare" ||
      (entry as Entry).type === "Hospital"
    );
  };
  
  const parseString = (value: unknown): string => {
    if (!isString(value)) {
      throw new Error('Incorrect or missing value: ' + value);
    }
    return value;
  };
  
  const parseDiagnosisCodes = (codes: unknown): Array<Diagnosis['code']> | undefined => {
    if (codes === undefined) {
      return undefined;
    }
  
    if (!isArray(codes) || !codes.every(isString)) {
      throw new Error('Incorrect diagnosis codes: ' + codes);
    }
  
    return codes;
  };
  
  const parseHealthCheckRating = (rating: unknown): HealthCheckRating => {
    if (!isNumber(rating) || !Object.values(HealthCheckRating).includes(rating)) {
      throw new Error('Incorrect or missing health check rating: ' + rating);
    }
    return rating;
  };
  
  const parseSickLeave = (sickLeave: unknown): SickLeave | undefined => {
    if (!isObject(sickLeave)) {
      return undefined;
    }
  
    const startDate = parseString((sickLeave as { startDate: unknown }).startDate);
    const endDate = parseString((sickLeave as { endDate: unknown }).endDate);
  
    return { startDate, endDate };
  };
  
  const isNumber = (value: unknown): value is number => {
    return typeof value === 'number' || value instanceof Number;
  };
  
  const isArray = (value: unknown): value is unknown[] => {
    return Array.isArray(value);
  };
  
  const isObject = (value: unknown): value is object => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  };
  

const toNewPatient = (object: unknown): NewPatient => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
    }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object) {
        const newPatient: NewPatient = {
            name: parseName(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
            entries: parseEntries(object.entries as unknown[])
        };
        return newPatient;
    }

    throw new Error('Incorrect data: some fields are missing');
};


export default {
    toNewPatient,
    parseName,
    parseDate,
    parseSsn,
    parseGender,
    parseOccupation,
    parseEntries
};