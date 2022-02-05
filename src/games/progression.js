import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const randomNumber = () => {
  const random = Math.floor(Math.random() * 10);
  return random;
};

export const makeProgression = () => {
  const riddle = [];
  let step = randomNumber(); // шаг надо делать от 1 до 10
  step += 1;
  let startElement = randomNumber();
  for (let i = 0; i <= 9; i += 1) {
    riddle[i] = startElement;
    startElement += step;
  }
  return riddle;
};

export const gameProgression = (name) => {
  console.log('What number is missing in the progression? ');
  const gameRounds = 3;
  for (let i = 1; i <= gameRounds; i += 1) {
    const array = makeProgression();
    const hiddenElementId = randomNumber();
    const requestedAnswer = array[hiddenElementId];
    array[hiddenElementId] = '..';
    const printArray = array.join(' ');
    console.log(`Question: ${printArray}`);
    const answer = Number.parseInt(readlineSync.question('Your answer: '), 10);
    // console.log(array[hiddenElementId]);
    //  console.log(`${hiddenElementId} id`);
    // console.log(array);
    // console.log(printArray);
    if (answer === requestedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${requestedAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
