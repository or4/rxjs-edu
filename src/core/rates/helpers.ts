import { TCryptoCurrencies, TFiatCurrencies } from 'types';

export const getUrlForRate = (cryptoCurrencyName: TCryptoCurrencies, fiatCurrencyName: TFiatCurrencies) => {
  switch (cryptoCurrencyName) {
    case 'ETH':
      return `1027/?convert=${fiatCurrencyName}`;
    case 'BTC':
    default:
      return `1/?convert=${fiatCurrencyName}`;
  }
};