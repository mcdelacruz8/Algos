/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let matches = 0;
  for (let i = 0; i < s.length; i++) {
    let subArr = s.slice(i, i + m);
    let sum = subArr.reduce((prev, curr) => prev + curr)
    if (sum == d) matches++;
  }
  return matches;
}