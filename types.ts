export type PriceType = number | null;
export type PricesType = [PriceType, PriceType];

export interface ICourse {
  name: string;
  prices: PricesType;
}
