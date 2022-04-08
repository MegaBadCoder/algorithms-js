import selectionSort from '../SelectionSort';

describe('SelectionSort', () => {
  expect(selectionSort([5, 3, 3, 2, 1])).toBe([1, 2, 3, 3, 5]);
});
