import diagnosesData from '../../data/diagnoses.ts';
import { Diagnosis } from '../types.ts';

const diagnoses: Diagnosis[] = diagnosesData;

const getDiagnosticEntries = (): Diagnosis[] => {
    return diagnoses;
};

export default {
    getDiagnosticEntries
};