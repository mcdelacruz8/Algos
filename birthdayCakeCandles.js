/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  let tall = 0;
  let numOfCandles = 0;

  for (let i = 0; i < candles.length; i++) {
    if (tall < candles[i]) {
      tall = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (tall == candles[i]) {
      numOfCandles++;
    }
  }
  return numOfCandles;
}