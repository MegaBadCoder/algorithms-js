import binarySearch from '../binarySearch';

test('adds 1 + 2 to equal 3', () => {
  expect(binarySearch([], 1)).toBe(-1);
  expect(binarySearch([0, 2, 3, 4], 2)).toBe(1);
  expect(binarySearch([0, 2, 3, 4], 3)).toBe(2);
  expect(binarySearch([0, 2, 3, 4, 5], 3)).toBe(2);
  expect(binarySearch([], 1)).toBe(-1);
  expect(binarySearch([1], 1)).toBe(0);
  expect(binarySearch([1, 2], 1)).toBe(0);
  expect(binarySearch([1, 2], 2)).toBe(1);
  expect(binarySearch([1, 5, 10, 12], 1)).toBe(0);
  expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
  expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
  expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
  expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
});
