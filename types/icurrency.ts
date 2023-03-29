export interface ICurrency {
  code: string;
  symbol: string;
  name: string;

  createdAt: Date | null;
  updatedAt: Date | null;
}

export const icurrencyKeys: (keyof ICurrency)[] = [
  "code",
  "symbol",
  "name",
  "createdAt",
  "updatedAt",
];

export const defaultCurrency: ICurrency = {
  code: "",
  symbol: "",
  name: "",

  createdAt: null,
  updatedAt: null,
};

export default ICurrency;
