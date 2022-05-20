import { SortingType } from '../enums';
import type { ICourse } from '../types';
import { sortByPriceRange } from './sorting';

export const courses: ICourse[] = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in Amsterdam', prices: [351, 360] },
  { name: 'Courses in France', prices: [null, null] },
];

describe('Function sortByPriceRange works correctly with given parameters', () => {
  describe('Function works correctly with boundary conditions', () => {
    it('Function works correctly with empty array and not given parameters', () => {
      expect(sortByPriceRange([])).toEqual([]);
    });
    it('Function works correctly with empty array and given sorting type SortingType.HIGH_TO_LOW', () => {
      expect(sortByPriceRange([], SortingType.HIGH_TO_LOW)).toEqual([]);
    });
    it('Function works correctly with empty array nad given sorting type SortingType.HIGH_TO_LOW', () => {
      expect(sortByPriceRange([], SortingType.HIGH_TO_LOW)).toEqual([]);
    });
  });
  describe('Function works correctly with equivalent classes', () => {
    it('Function works correctly with not empty array and not given parameters', () => {
      expect(sortByPriceRange(courses)).toEqual([
        { name: 'Courses in France', prices: [null, null] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Amsterdam', prices: [351, 360] },
        { name: 'Courses in Germany', prices: [500, null] },
      ]);
    });
    it('Function works correctly with not empty array and given SortingType.HIGH_TO_LOW', () => {
      expect(sortByPriceRange(courses, SortingType.HIGH_TO_LOW)).toEqual([
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in Amsterdam', prices: [351, 360] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it('Function works correctly with not empty array and given SortingType.LOW_TO_HIGH', () => {
      expect(sortByPriceRange(courses, SortingType.LOW_TO_HIGH)).toEqual([
        { name: 'Courses in France', prices: [null, null] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Amsterdam', prices: [351, 360] },
        { name: 'Courses in Germany', prices: [500, null] },
      ]);
    });
  });
});
