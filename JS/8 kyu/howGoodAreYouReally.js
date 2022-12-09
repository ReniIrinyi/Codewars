function betterThanAverage(classPoints, yourPoints) {
  const points = classPoints.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);
  const average = points / classPoints.length;

  return average < yourPoints ? true : false;
}
