/* 
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  let res = 1;
  Array.from({ length: n }).forEach((_, i) => {
    if (i + 1 & 1 === 1) res = res * 2;
    else res++;
  });
  return res;
}