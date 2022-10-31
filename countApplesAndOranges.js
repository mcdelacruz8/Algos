/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let count = [0, 0]
  apples.forEach(apple => {
    if (apple < 1) return
    let dist = apple + a
    if (dist >= s && dist <= t) count[0] += 1
  })

  oranges.forEach(orange => {
    if (orange > -1) return
    let dist = orange + b
    if (dist >= s && dist <= t) count[1] += 1
  })

  count.forEach(count => console.log(count))
  return

}