export default (word) => {
  const wordToArr = word.split('')

  const wordToNumber = wordToArr.map((letter) => letters[letter]).join('')

  return wordToNumber
}

const letters = {
  DEF: 3,
  T: 8
}
