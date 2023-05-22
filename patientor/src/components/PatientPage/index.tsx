import React from 'react';
import { Patient } from '../../types';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TransgenderIcon from '@mui/icons-material/Transgender';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Paper from '@mui/material/Paper';

interface PatientPageProps {
  patients: Patient[];
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




