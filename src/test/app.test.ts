import { expect, test } from 'vitest'
import { merge } from '../merge';
import { describe } from 'node:test'

describe('merge all three collection with sorted collection', () => {
  test('merge three collection to sorted collection', () => {
    expect(merge([1, 2, 3], [6, 5, 4], [7, 8, 9])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test('merge three collection to sorted collection', () => {
    expect(merge([27, 29, 50], [24, 18, 10], [34, 40, 50])).toStrictEqual([
      10, 18, 24, 27, 29, 34, 40, 50, 50
    ]);
  });
})