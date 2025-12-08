import runGame from '../index.js'

const isEven = (number) => {
  return number % 2 === 0
}

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const playEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".'
  runGame(description, generateRound)
}

export default playEvenGame
