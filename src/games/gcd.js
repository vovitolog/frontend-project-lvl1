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

export const findGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

export const gameGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers. ');
  const gameRounds = 3;
  for (let i = 1; i <= gameRounds; i += 1) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const gcd = findGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = Number.parseInt(readlineSync.question('Your answer: '), 10);
    if (answer === gcd) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
