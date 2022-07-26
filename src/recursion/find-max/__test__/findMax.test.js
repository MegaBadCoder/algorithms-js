// eslint-disable-next-line import/extensions
import findMax from '../findMax.js';

test('findMax', () => {
  expect(findMax([5, 1, 3, 3])).toStrictEqual(5);
  expect(findMax([])).toStrictEqual(undefined);
  expect(findMax([10, 9, 7, 8])).toStrictEqual(10);
});
