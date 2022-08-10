import quickSort from '../quickSort';

test('quickSort', () => {
  expect(quickSort([1])).toStrictEqual([1]);
  expect(quickSort([2, 3, 1])).toStrictEqual([1, 2, 3]);
  expect(quickSort([2, 3, 3, 1])).toStrictEqual([1, 2, 3, 3]);
});
