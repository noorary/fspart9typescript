import React, { useEffect, useState } from 'react';
import './App.css';
import { DiaryEntriesList } from './components/DiaryEntriesList';
import { NewDiaryEntryForm } from './components/NewDiaryEntryForm';
import { DiaryEntry, NewDiaryEntry, Visibility, Weather } from './types';
import { addDiaryEntry, getDiaryEntries } from './diaryService';
import { clear } from 'console';

const App = () => {

  const [ diaryEntries, setDiaryEntries ] = useState<DiaryEntry[]>([]);
  const [ newInputDate, setNewInputDate ] = useState('');
  const [ newVisibility, setVisibility ] = useState<Visibility | undefined>(undefined);
  const [ newWeather, setWeather ] = useState<Weather | undefined>(undefined);
  const [ newComment, setNewComment ] = useState('');
  const [ error, setError ] = useState<string>('');

  const handleInputDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setNewInputDate(event.target.value);
  }

  const handleVisibilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setVisibility(event.target.value as Visibility);
  }

  const handleWeatherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setWeather(event.target.value as Weather);
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setNewComment(event.target.value);
  }

  const clearVisibility = () => {
    handleVisibilityChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  const clearWeather = () => {
    handleWeatherChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  const diaryEntryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const newDiaryEntry: NewDiaryEntry = {
      date: newInputDate,
      visibility: newVisibility ?? Visibility.Great,
      weather: newWeather ?? Weather.Sunny,
      comment: newComment
    }
    addDiaryEntry(newDiaryEntry)
    .then(data => {
      if(data !== undefined)
      {
        setDiaryEntries(diaryEntries.concat(data));    
        setNewInputDate('');
        setNewComment('');
        clearVisibility();
        clearWeather();
        setError('');
      }
    })
    .catch(error => {
      setError(error.response.data);
    }
    )
  };

  useEffect(() => {
    console.log('effect');
    getDiaryEntries().then(data => {
      setDiaryEntries(data);
    })
  }, [])

  return (
    <div>
      <NewDiaryEntryForm 
      errorMessage={error}
      addEntry={diaryEntryCreation}
      newInputDate={newInputDate}
      handleInputDateChange={handleInputDateChange}
      newVisibility={newVisibility}
      handleVisibilityChange={handleVisibilityChange}
      newWeather={newWeather}
      handleWeatherChange={handleWeatherChange}
      newComment={newComment}
      handleCommentChange={handleCommentChange}/>
      <DiaryEntriesList entries={diaryEntries} />
    </div>
  )
}

export default App;
