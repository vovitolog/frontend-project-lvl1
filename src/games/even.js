import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const randomNumber = () => {
  const random = Math.floor(Math.random() * 100); // доделать для любых положительных чисел
  return random;
};

export const gameEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  const gameRounds = 3;
  for (let i = 1; i <= gameRounds; i += 1) {
    const question = randomNumber();
    let requestedAnswer;
    if (isEven(question)) {
      requestedAnswer = 'yes';
    } else {
      requestedAnswer = 'no';
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === requestedAnswer) {
      console.log('Correct!');
    // gameRound += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${requestedAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
