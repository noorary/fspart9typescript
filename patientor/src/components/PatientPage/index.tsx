import React from 'react';
import { Diagnosis, Patient } from '../../types';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TransgenderIcon from '@mui/icons-material/Transgender';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Paper from '@mui/material/Paper';

interface PatientPageProps {
  patients: Patient[];
  diagnosis: Diagnosis[];
}

export const PatientPage = (props: PatientPageProps) => {

  const { id } = useParams();
  const patient = props.patients.find(p => p.id === id);

  if (!patient) {
    return <div>Patient not found!</div>;

  }
  return (
    <div>
      <Typography variant="h4">Patient Details</Typography>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="h5">Name:{patient.name} {genderIcon(patient)}</Typography>
        <Typography variant="body1">SSN: {patient.ssn}</Typography>
        <Typography variant="body1">Occupation: {patient.occupation}</Typography>
        <Typography variant="h6" style={{ marginTop: '16px', marginBottom: '8px' }}>Entries:</Typography>
          {patient.entries.map((entry) => (
            <Typography key={entry.id} variant="body1" style={{ marginTop: '8px', marginBottom: '4px' }}>
              {entry.date} {entry.description}
              {entry.diagnosisCodes?.map((code) => {
                return <li key={code} style={{ marginTop: '8px', marginBottom: '4px' }}>{code} {props.diagnosis.find(d => d.code === code)?.name}</li>;
              })}
            </Typography>
          ))}
      </Paper>
    </div>
  )
};

export const genderIcon = (props: Patient) => {
  if (props.gender  === 'other') {
    return <TransgenderIcon />;
  } else if (props.gender === 'female') {
    return <FemaleIcon />;
  } else if (props.gender === 'male') {
    return <MaleIcon />;
  } else {
    return null;
  }
};




