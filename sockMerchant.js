/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  let pairs = 0;
  let search = new Set();
  for (const sock of ar) {
    if (search.has(sock)) {
      pairs++;
      search.delete(sock);
    } else {
      search.add(sock);
    }
  }
  return pairs;
}