/* eslint-disable */
export default function findMax(array, i = 0, lastMax = 0) {
  if (array.length === 0) {
    return undefined;
  } else if (i + 1 === array.length) {
    return lastMax;
  }

  lastMax = array[i] > lastMax ? array[i] : lastMax;
  return findMax(array, i + 1, lastMax);
}
