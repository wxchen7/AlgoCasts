// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

module.exports = anagrams

// function convertStrToMapChar(str) {
//   const mapChar = {}
//   for (const char of str) {
//     mapChar[char] = mapChar[char] + 1 || 1
//   }
//   return mapChar
// }

// function anagrams(stringA, stringB) {
//   const filteredStrA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   const filteredStrB = stringB.replace(/[^\w]/g, '').toLowerCase()

//   if (filteredStrA.length !== filteredStrB.length) {
//     return false
//   }

//   const mapCharA = convertStrToMapChar(filteredStrA)
//   const mapCharB = convertStrToMapChar(filteredStrB)

//   for (const char in mapCharA) {
//     if (mapCharA[char] !== mapCharB[char]) {
//       return false
//     }
//   }

//   for (const char in mapCharB) {
//     if (mapCharB[char] !== mapCharA[char]) {
//       return false
//     }
//   }

//   return true
// }
