export default function quickSort(array) {
  if (array.length < 2) return array;

  const pivot = array[0];
  const less = [];
  const greater = [];
  // const pivotArr = [];
  // TODO: Improve the quicksort algorithm
  for (let i = 1; i < array.length; i += 1) {
    const num = array[i];
    if (num < pivot) less.push(num);
    else if (num > pivot) greater.push(num);
    // else pivotArr.push(num);
  }

  return quickSort(less).concat([pivot], quickSort(greater));
}
