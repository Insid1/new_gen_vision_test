import { adaptPrices } from '../adapter';
import type { ICourse, PricesType } from '../types';
// Как мне кажется если данные в таком формате приходят с сервера,
// лучше с помощью адаптера их оптимизировать под более подходящий тип данных
// Чтоб этого не делать в функциях
// Тогда все проверки типов уходят и функция будет более чистой
export const filterByRange = (
  [start, end]: PricesType,
  data: ICourse[]
): ICourse[] => {
  // Проверка на типы
  [start, end] = adaptPrices(start, end);

  return data.filter(({ prices }) => {
    let [offerPriceStart, offerPriceEnd] = adaptPrices(prices[0], prices[1]);
    // let offerPriceStart = prices[0] === null ? 0 : prices[0];
    // let offerPriceEnd = prices[1] === null ? Infinity : prices[1];

    return start! <= offerPriceEnd && end! >= offerPriceStart;
  });
};
