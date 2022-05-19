import { PriceType } from './types';

export const adaptPrices = (start: PriceType, end: PriceType): number[] => {
  // Проверка на типы
  start = start === null ? 0 : start;
  end = end === null ? Infinity : end;
  // Проверка на корректность введенных значений
  if (start > end) {
    [start, end] = [end, start];
  }
  return [start, end];
};
