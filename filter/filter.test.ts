import { filterByRange } from './filter';
import type { ICourse } from '../types';
import { courses } from '../mock-data';

describe(`Function filterByRangeTS works correctly`, () => {
  describe('Function works correctly with boundary conditions', () => {
    it(`function with given [null, null] works correctly`, () => {
      expect(filterByRange([null, null], courses)).toEqual(courses);
    });
    it(`function with given [0, null] works correctly`, () => {
      expect(filterByRange([0, null], courses)).toEqual(courses);
    });
    it(`function with given[null, 0] works correctly`, () => {
      expect(filterByRange([null, 0], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[0, 0] works correctly`, () => {
      expect(filterByRange([0, 0], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });

    it(`function with given[0, 99999] works correctly`, () => {
      expect(filterByRange([0, 99999], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in Amsterdam', prices: [351, 360] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[99999, null] works correctly`, () => {
      expect(filterByRange([99999, null], courses)).toEqual([
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[1, 1] works correctly`, () => {
      expect(filterByRange([1, 1], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[99999, 99999] works correctly`, () => {
      expect(filterByRange([99999, 99999], courses)).toEqual([
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
  });

  describe('Function works correctly with equivalent classes', () => {
    it(`function with given[1, 99] works correctly`, () => {
      expect(filterByRange([1, 99], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[100, 200] works correctly`, () => {
      expect(filterByRange([100, 200], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[500, 600] works correctly`, () => {
      expect(filterByRange([500, 600], courses)).toEqual([
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[99, 100] works correctly`, () => {
      expect(filterByRange([99, 100], courses)).toEqual([
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
    it(`function with given[200, 250] works correctly`, () => {
      expect(filterByRange([200, 250], courses)).toEqual([
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ]);
    });
  });
});
