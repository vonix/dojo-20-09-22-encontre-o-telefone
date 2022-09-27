export default (word) => {
  const listLetters = word.split('')

  const wordToNumber = listLetters.map((letter) => {
    const keys = Object.keys(mapLetters)
    const key = keys.find(item => item.includes(letter))
    return mapLetters[key]
  }).join('')

  return wordToNumber
}

const mapLetters = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
  1: 1,
  '-': '-'
}
