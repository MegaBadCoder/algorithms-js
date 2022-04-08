export default function binarySearch(array, item) {
  array.sort((a, b) => a - b);

  let low = 0;
  let high = array.length - 1;

  let mid = Math.floor((low + high) / 2);
  let quess = array[mid];

  while (low <= high) {
    mid = low + high;
    quess = array[mid];

    if (quess === item) {
      return mid;
    }
    if (quess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
