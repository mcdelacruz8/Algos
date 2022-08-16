/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    }
    if (b[i] > a[i]) {
      bobPoints++;
    }
  }
  return [alicePoints, bobPoints];
}