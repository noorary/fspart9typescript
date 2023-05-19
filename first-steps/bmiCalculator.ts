export const calculateBmi = (height: number, weight: number): string => {
  if (weight <= 0 || height <= 0) { throw new Error('Weight and height cannot be equal or less than 0'); }

  const bmi : number = weight / ((height / 100) ^2);

  switch(true) {
    case (bmi < 16.0) :
      return 'Underweight (Severe thinness)';
    case (bmi >= 16.0 && bmi < 17.0 ):
      return 'Underweight (Moderate thinness)';
    case (bmi >= 17.0 && bmi < 18.5 ):
      return 'Underweight (Mild thinness)';
    case (bmi >= 18.5 && bmi < 25.0 ):
      return 'Normal (healthy weight)';
    case (bmi >= 25.0 && bmi < 30.0 ):
      return 'Overweight (Pre-obese)';
    case (bmi >=30.0 && bmi < 35.0 ):
      return 'Obese (Class I)';
    case (bmi >=35.0 && bmi < 40.0 ):
      return 'Obese (Class II)';
    case (bmi >=40):
      return 'Obese (Class III)';
    default:
      return `invalid bmi ${bmi}`;
  }
};

// interface InputParameters {
//   height: number,
//   weight: number
// }

// const parseArguments = (args: Array<string>): InputParameters => {
//   console.log(args);
//   if (args.length < 4 || args.length > 4) throw new Error("Give height and weight as arguments");

//   const height = Number(args[2]);
//   const weight = Number(args[3]);

//   console.log(height, weight);

//   if (isNaN(height) || isNaN(weight)) { throw new Error("Given arguments are not numbers");}

//   return {
//     height: height,
//     weight: weight
//   };
// };



// try {
//   const { height, weight } = parseArguments(process.argv);
//   console.log(calculateBmi(height, weight)); 
// } catch (ex) {
//   console.log(`Something bad happened: ${ex}`);
// }

//console.log(calculateBmi(180, 74))