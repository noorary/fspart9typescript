interface exerciseSummary {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (exerciseHours: Array<number>, target: number): exerciseSummary => {
  
  const trainingDays = exerciseHours.filter(x => (x!=0 && x)).length;
  const average = (exerciseHours.reduce((total, item) => total + item)) / exerciseHours.length;
  const rating = calculateRating(target, average);

  const result: Result =
  {
    periodLength: exerciseHours.length,
    trainingDays: trainingDays,
    success: average >= target ? true : false,
    rating: rating,
    ratingDescription: mapRatingDescription(rating),
    target: target,
    average: average
  }

  return result
}

const mapRatingDescription = (rating: number): string => {
  switch(rating) {
    case 1 :
      return 'you didn\'t quite reach your goal';
    case 2 :
      return 'great! you reached your goal';
    case 3 :
      return 'excellent! you exercised more than your goal';
  }
}

const calculateRating = (target: number, average: number) : number => {
  const difference = target - average;
  switch(true) {
    case (difference < 0):
      return 3;
    case (difference == 0):
      return 2;
    case (difference > 0):
      return 1;
  }
}

interface ExerciseInputParameters {
  target: number,
  exerciseAmounts: number[]
}

interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number 
}

const parseExerciseArguments = (args: Array<string>): ExerciseInputParameters => {
  if (args.length < 4 ) throw new Error("You should give at least target and one exercise amount as arguments");

  const parameterArray = args.slice(3).map(x => {return Number(x)});
  const parameterTarget = Number(args[2]);

  if (isNaN(parameterTarget)) { throw new Error("Given arguments are not numbers")}

  parameterArray.reduce((acc, val, ind) => {
    if (Number.isNaN(val)) {throw new Error("Given arguments are not numbers")}
    return acc;
  })

  //console.log(parameterArray.map(x => isNaN(x)));

  return {
    target: parameterTarget,
    exerciseAmounts: parameterArray
  }
}

const { exerciseAmounts, target } = parseExerciseArguments(process.argv)

//console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1], 2));
console.log(calculateExercise(exerciseAmounts, target));