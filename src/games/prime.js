import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const randomNumber = () => {
  const random = Math.floor(Math.random() * 100); // доделать для любых положительных чисел
  return random;
};

export const gamePrime = (name) => {
  console.log('Answer "yes" if the number is prime, otherwise answer "no". ');
  const gameRounds = 3;
  for (let i = 1; i <= gameRounds; i += 1) {
    const question = randomNumber();
    let requestedAnswer;
    if (isPrime(question)) {
      requestedAnswer = 'yes';
    } else {
      requestedAnswer = 'no';
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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
