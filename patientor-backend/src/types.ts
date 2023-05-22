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
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;

