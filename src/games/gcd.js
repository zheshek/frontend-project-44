import getRandomNumber from '../utils.js'

const getGcd = (a, b) => {
  let num1 = a
  let num2 = b

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

export const description = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))

  return [question, correctAnswer]
}
