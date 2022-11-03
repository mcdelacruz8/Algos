// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const distAFromM = Math.abs(x - z);
  const distBFromM = Math.abs(y - z);

  if (distBFromM > distAFromM) return "Cat A";
  else if (distAFromM > distBFromM) return "Cat B";
  return "Mouse C";
}