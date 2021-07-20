/**
 *
 * @param number number of elements to print
 */
function forLoopEvenOdd(number) {
  for (i = 0; i <= number; i++) {
    if (i % 2 == 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
  }
}

forLoopEvenOdd(15);
