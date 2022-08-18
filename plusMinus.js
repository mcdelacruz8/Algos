/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  var n = arr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  var pos = positive / n;
  var neg = negative / n;
  var z = zero / n;

  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + z.toFixed(6));
}