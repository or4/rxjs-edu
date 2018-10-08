import { Reducer } from 'redux';
import * as R from 'ramda';

import { ActionTypes, ActionsAll } from './actions';
import { TCryptoCurrencies } from 'types';

type TState = TCryptoCurrencies[];

const initialState: TState = ['BTC'];

export type TSelectedCryptosState = TState;
export const selectedCryptosInitialState = initialState;
export const selectedCryptos: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.ADD_CRYPTO:
      return addCrypto(state, action.cryptoName);
    case ActionTypes.REMOVE_CRYPTO:
      return removeCrypto(state, action.cryptoName);
    default:
      return state;
  }
};

function addCrypto(cryptos, crypto) {
  if (R.contains(crypto, cryptos)) {
    return cryptos;
  }
  return R.append(crypto, cryptos);
}

function removeCrypto(cryptos, crypto) {
  if (R.contains(crypto, cryptos)) {
    return R.remove(cryptos.indexOf(crypto), 1, cryptos);
  }
  return cryptos;
}
