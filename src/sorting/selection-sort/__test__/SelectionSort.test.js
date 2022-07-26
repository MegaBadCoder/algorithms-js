import selectionSort from '../SelectionSort';

test('selectionSort', () => {
  expect(selectionSort([5, 1, 3])).toStrictEqual([1, 3, 5]);
  expect(selectionSort([1, 3, 5])).toStrictEqual([1, 3, 5]);
  expect(selectionSort([])).toStrictEqual([]);
  expect(selectionSort([])).toEqual([]);
  expect(selectionSort([1])).toEqual([1]);
  expect(selectionSort([1, 2])).toEqual([1, 2]);
});
