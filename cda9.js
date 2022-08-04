// Create a function that will return the average of all values in the array.

function averageOfArray() {
  var array = [9, 3, -3, -9, 11, -6, 5, 10, -9, 1];
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}