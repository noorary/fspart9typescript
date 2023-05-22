import express from 'express';
import patientService from '../services/patientService';
import utils from '../utils';
import { NewPatient, Patient } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatients());
});

router.post('/', (req, res) => {
    try
    {
        const newPatient: NewPatient = utils.toNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    }
    catch (error: unknown)
    {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

router.get('/:id', (req, res) => {
    const patient: Patient | undefined = patientService.getPatient(req.params.id);
    if (patient) {
        res.send(patient);
    }
    else {
        res.sendStatus(404);
    }
});

export default router;
