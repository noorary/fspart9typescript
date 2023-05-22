import uuid = require('uuid');
import patientData from '../../data/patients.ts';
import { NewPatient, NonSensitivePatient, Patient} from '../types.ts';

const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
    return patients;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const addPatient = ( patient: NewPatient ): Patient => {
    const newPatient = {
        id: uuid.v4(),
        ...patient
    };

    patients.push(newPatient);
    return newPatient;
};

const getPatient = ( id: string ): Patient | undefined => {
    const patient = patients.find(p => p.id === id);
    if (patient) {
        return patient;
    }
    else {
        return undefined;
    }
};

export default {
    getPatients,
    getNonSensitivePatients,
    addPatient,
    getPatient
};
