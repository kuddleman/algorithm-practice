//factorial non recursively

    // function factorialWithLoop( num ) {

    //   let product = 1;

    //   for ( num; num > 0; num-- ) {
    //     product *= num;
    //   }

    //   return product;
    // }

    // console.log(factorialWithLoop(5))



//factorial RECURSIVELY   

function factorialRecursively( num ) {
   if ( num === 1 ) return 1

  return num * factorialRecursively( num - 1 )
}

console.log(factorialRecursively(5))