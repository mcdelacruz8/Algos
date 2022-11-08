/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  let max = 0;
  let maxId = 6;
  let store = new Array(6).fill(0);

  for (const num of arr) {
    store[num]++;
    if (store[num] > max) {
      max = store[num]
      maxId = num;
    } else if (store[num] === max && num < maxId) {
      maxId = num;
    }
  }
  return maxId;
}