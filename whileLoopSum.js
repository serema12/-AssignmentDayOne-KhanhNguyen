/**
 * Sum all elements
 * @param number array of integer numbers
 */
function sum(number) {
  total = 0;
  counter = 0;
  while (counter < number.length) {
    total += number[counter];
    counter += 1;
  }
  return total;
}

console.log(sum([1, 2]));
