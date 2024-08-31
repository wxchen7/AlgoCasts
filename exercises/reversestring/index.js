// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => (rev = char + rev), '')
}

module.exports = reverse

// function reverse(str) {
//   let rev = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i]
//   }
//   return rev
// }

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// function reverse(str) {
//   let rev = ""
//   for (const char of str) {
//     rev = char + rev
//   }
//   return rev
// }
