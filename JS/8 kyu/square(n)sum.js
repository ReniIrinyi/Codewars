const array = [1, 2];
function squareSum(numbers) {
  const map = numbers.reduce((prev, curr) => prev + Math.pow(curr, 2), 0);
  return map;
}
