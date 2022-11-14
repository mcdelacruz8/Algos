/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
  const max = Math.max(...height)
  const potionIntake = max - k

  if (potionIntake > 0) {
    return potionIntake
  }
  return 0;
}