const productOfArray = arr => {

 if ( arr.length === 0 ) {
   return 1
 }

 return arr[0] * productOfArray(arr.slice(1))
}


console.log("The product is: ", productOfArray([1,2,3,4,5]))
