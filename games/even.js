import getRandomNumber from '../src/utils.js'

const isEven = number => number % 2 === 0

export const description = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}
