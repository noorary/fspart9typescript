import axios from 'axios';
import { DiaryEntry, NewDiaryEntry } from './types';

interface ValidationError {
    message: string;
    errors: Record<string, string[]>
  }

export const getDiaryEntries = () => {
    return axios
        .get<DiaryEntry[]>('http://localhost:3001/api/diaries')
        .then(response => response.data);
}

export const addDiaryEntry = (newDiaryEntry: NewDiaryEntry): Promise<DiaryEntry | undefined> => {
    try
    {
        return axios
        .post<DiaryEntry>('http://localhost:3001/api/diaries', newDiaryEntry)
        .then(response => response.data);
    }
    catch (error)
    {
        if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
            console.log(error.status)
            console.error(error.response);
            return Promise.reject(error.response?.data);
          } else {
            console.error(error);
            return Promise.reject(error);
        }
    }
}