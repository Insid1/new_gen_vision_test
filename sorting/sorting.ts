import { adaptPrices } from '../adapter';
import type { ICourse, PricesType } from '../types';

const sortByPriceRange = (data: ICourse[]): ICourse[] => {
  return data.slice().sort((a, b) => {
    const [startA, endA] = adaptPrices(a.prices[0], a.prices[1]);
    const [startB, endB] = adaptPrices(b.prices[0], b.prices[1]);
    if (startA - startB === 0) {
      return endB - endA;
    }
    return startA - startB;
  });
};
