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
  DEF: 3,
  T: 8
}
