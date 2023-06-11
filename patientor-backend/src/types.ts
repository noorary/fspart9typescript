export type Code = string;
export type Name = string;
export type Latin = string | undefined;

export interface Diagnosis {
    code: Code;
    name: Name;
    latin?: Latin;
}

export type Id = string;
export type PatientName = string;
export type DateOfBirth = string;
export type SSN = string;

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}
export type Occupation = string;

export interface Patient {
    id: Id;
    name: PatientName;
    dateOfBirth: DateOfBirth;
    ssn: SSN;
    gender: Gender;
    occupation: Occupation;
    entries: Entry[];
}

export interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }
  
export interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: SickLeave;
}

export interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge: {
        date: string;
        criteria: string;
    };
}

export interface SickLeave {
    startDate: string;
    endDate: string;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id'>;

