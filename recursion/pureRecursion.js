function collectOddValues2(arr) {
  let newArr = []
   console.log(arr)
  if(arr.length === 0) {
    return newArr
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues2(arr.slice(1)))
  console.log(newArr)
  return newArr
}

console.log(collectOddValues2([4, 6, 8, 2, 3, 5, 23]))

// To make copies of objects and not mutate them:
// For Arrays:  use methods like slice, the spread operator and concat

// for Strings  use slice, substr or substring to make copies of Strings  

// for Objects,   use Object.assign or the spread operator.