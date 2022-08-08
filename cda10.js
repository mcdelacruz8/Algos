// Create a function that will return the index where the value of x first occurs in the array or return -1 if it's not present.

function findIndexOfX() {
  var array = [13, 15, -18, 29, 3, -4, -9, -10, 3, -7];
  var x = 6;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === x) {
      return i;
    }
  }

  return -1;
}