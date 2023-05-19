import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { ExercisesRequestBody, calculateExercise } from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;

    if (typeof height !== 'string' || isNaN(Number(height)) || typeof weight !== 'string' || isNaN(Number(weight))) {
        res.send({error: "malformatted parameters"});
    }

    res.send({
        weight: weight,
        height: height,
        bmi: calculateBmi(Number(height), Number(weight))
    });
  });

  app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = req.body;

    const reqBody = body as ExercisesRequestBody;
    const dailyExercise = reqBody.daily_exercises;
    const target = reqBody.target;

    if (!dailyExercise || !target) {
      res.send({ error: 'parameters missing' });
    }

    if (!Array.isArray(dailyExercise) || dailyExercise.some(item => typeof item !== 'number') || typeof target !== 'number')
    {
      res.send({error: 'malformatted parameters'});
    }

    const result = calculateExercise(reqBody.daily_exercises, reqBody.target);

    res.send(result);
  });

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});