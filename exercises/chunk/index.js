// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const res = []

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    res.push(chunk)
  }
  return res
}

module.exports = chunk

// function chunk(array, size) {
//   const res = []
//   let temp = []

//   for (let i = 0; i < array.length; i++) {
//     temp.push(array[i])

//     if (temp.length === size) {
//       res.push(temp)
//       temp = []
//     }
//   }
//   if (temp.length > 0) {
//     res.push(temp)
//   }

//   return res
// }
