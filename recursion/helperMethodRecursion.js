//using a helper method when you're working with a list or 2D object


function collectOddValues(arr) {

   let result = []
    
   //helper contains recursive logic:
   function helper(helperInput) {
      if( helperInput.length === 0 ) {
        return
      }
      if( helperInput[0] % 2 !==  0) {
        result.push(helperInput[0])
      }

      helper(helperInput.slice(1))
   }

   helper(arr)

   return result


}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))