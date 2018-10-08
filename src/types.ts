export type TFiatCurrencies = 'USD' | 'EUR';
export type TCryptoCurrencies = 'BTC' | 'ETH';

export type TCurrencies = TFiatCurrencies | TCryptoCurrencies;

// export const fiatCurrencies = ['USD', 'EUR'];
export const fiatCurrencies = ['USD'];
// export const cryptoCurrencies = ['BTC', 'ETH', 'BTS', 'BURST', 'CLAM', 'DASH', 'DGB', 'DOGE', 'GAME', 'HUC', 'LTC', 'MAID', 'OMNI', 'NXT', 'PPC', 'STR', 'SYS', 'VIA', 'VTC', 'XCP', 'XEM', 'XMR', 'XPM', 'XRP', 'BCN', 'SC', 'EXP', 'FCT', 'AMP', 'DCR', 'LSK', 'LBC', 'STEEM', 'SBD', 'ETC', 'REP', 'ARDR', 'ZEC', 'STRAT', 'PASC', 'GNT', 'GNO', 'BCH', 'ZRX', 'CVC', 'OMG', 'GAS', 'STORJ', 'EOS', 'SNT', 'KNC', 'BAT', 'LOOM', 'QTUM', 'USDT'];
export const cryptoCurrencies = ['BTC', 'ETH', 'BTS', 'BURST', 'CLAM', 'DASH'];
export const currencies = [].concat(fiatCurrencies).concat(cryptoCurrencies);

