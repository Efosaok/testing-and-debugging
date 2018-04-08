export default (number) => {
  if (typeof number !== 'number') {
    return 'invalid parameter passed';
  }
  let result = '';
  if (number % 3 === 0) {
    result += 'fizz';
  }
  if (number % 5 === 0) {
    result += 'buzz';
  }
  return result === '' ? number : result;
}