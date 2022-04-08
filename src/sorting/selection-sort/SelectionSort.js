function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1, l = arr.length; i <= l; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

export default function selectionSort(arr) {
  const newArr = [];

  for (let i = 0, l = arr.length; i <= l; i += 1) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(i, 1);
  }

  return newArr;
}
