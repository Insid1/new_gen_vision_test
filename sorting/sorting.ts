import { adaptPrices } from '../adapter';
import { SortingType } from '../enums';
import { courses } from '../mock-data';
import type { ICourse } from '../types';

const sortLowToHigh = (a: ICourse, b: ICourse): number => {
  const [startA, endA] = adaptPrices(a.prices[0], a.prices[1]);
  const [startB, endB] = adaptPrices(b.prices[0], b.prices[1]);
  if (startA - startB === 0) {
    return endB - endA;
  }
  return startA - startB;
};
const sortHighToLow = (a: ICourse, b: ICourse): number => {
  const [startA, endA] = adaptPrices(a.prices[0], a.prices[1]);
  const [startB, endB] = adaptPrices(b.prices[0], b.prices[1]);
  if (startB - startA === 0) {
    return endA - endB;
  }
  return startB - startA;
};

export const sortByPriceRange = (
  data: ICourse[],
  sortingType: SortingType = SortingType.LOW_TO_HIGH
): ICourse[] => {
  const copiedData = data.slice();
  switch (sortingType) {
    case SortingType.LOW_TO_HIGH: {
      return copiedData.sort(sortLowToHigh);
    }
    case SortingType.HIGH_TO_LOW: {
      return copiedData.sort(sortHighToLow);
    }
    default: {
      return copiedData;
    }
  }
};

console.log(sortByPriceRange(courses, SortingType.HIGH_TO_LOW));
console.log(sortByPriceRange(courses, SortingType.LOW_TO_HIGH));
