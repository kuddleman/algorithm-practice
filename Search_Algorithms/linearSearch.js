// This function accepts an array and a value 

// Loop through the array and check is the current array Element 
// if equal to the value

// if it is, return the index at which the element is found

// if the value is never found return -1

const findTheValue = ( array, value ) => {

  for( let i = 0; i < array.length; i++ ) {
    let number = array[i]
    if ( number === value ) {
      return `The value was found at index: ${i}`
    }
  }
  return `Oops!  The value was NOT found.  So you get a: ${-1}`

}

console.log(findTheValue([1,2,3,4,5,6], 9))