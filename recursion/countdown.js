//base case

//different input..the recursive call


const countDown = num => {
  if (num <= 0) {
    console.log("I'm all done!")
    return;
  }

  console.log(num)
  num--
  countDown(num)
}

countDown(5);