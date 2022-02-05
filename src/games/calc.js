import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const randomNumber = () => {
  const random = Math.floor(Math.random() * 100); // доделать для любых положительных чисел
  return random;
};

export const randomOperator = () => {
  const rand = Math.floor(1 + Math.random() * 3);
  let returnString = '';
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  let result;
  switch (rand) {
    case 1: {
      returnString = `${firstNumber} + ${secondNumber}`;
      result = firstNumber + secondNumber;
      break;
    }
    case 2: {
      returnString = `${firstNumber} - ${secondNumber}`;
      result = firstNumber - secondNumber;
      break;
    }
    case 3: {
      returnString = `${firstNumber} * ${secondNumber}`;
      result = firstNumber * secondNumber;
      break;
    }
    default: break;
    // console.log(operator);
  }
  return [result, returnString];
};

export const gameCalc = (name) => {
  const gameRounds = 3;
  for (let i = 1; i <= gameRounds; i += 1) {
    const [result, returnString] = randomOperator();
    console.log('What is the result of the expression?');
    console.log(`Question: ${returnString}`);
    const answer = Number.parseInt(readlineSync.question('Your answer: '), 10);
    console.log(typeof (answer));
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
