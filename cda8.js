// Create a function that returns the sum of all odd numbers from 6 to 503.

function sum_odd() {
  var sum = 0;

  for (var i = 6; i < 504; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}