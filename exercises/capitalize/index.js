// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(' ')
  const resArr = arr.map((word) => word[0].toUpperCase() + word.slice(1))
  return resArr.join(' ')
}

module.exports = capitalize

// function capitalize(str) {
//   let res = str[0].toUpperCase()

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       res += str[i].toUpperCase()
//     } else {
//       res += str[i]
//     }
//   }

//   return res
// }
