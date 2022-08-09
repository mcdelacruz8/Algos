/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // calculates how many integers the first arr has
  const dim = arr[0].length;
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let sum = 0;

  for (let i = 0, j = (dim - 1); i < dim, j > -1; i++, j--) {
    firstDiagonalSum += arr[i][i];
    secondDiagonalSum += arr[i][j];
  }

  sum = firstDiagonalSum - secondDiagonalSum;

  if (sum > 0) {
    return sum;
  } else if (sum < 0) {
    return (sum * (-1))
  } else {
    return 0;
  }
}