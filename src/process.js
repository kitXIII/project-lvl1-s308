import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attempts = 3;

const process = (game) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}\n`);

  if (!game) {
    return;
  }

  const gameInstance = game();
  const gameTask = car(gameInstance);
  const questionPairGenerator = cdr(gameInstance);

  console.log(gameTask);

  for (let i = 0; i < attempts; i += 1) {
    const questionPair = questionPairGenerator();
    const question = car(questionPair);
    const trueAnswer = cdr(questionPair);
    const userAnswer = readlineSync.question(`Question: ${question} \nYou answer: `);
    if (userAnswer !== trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default process;