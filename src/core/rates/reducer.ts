import { Reducer } from 'redux';
import * as R from 'ramda';

import { ActionTypes, ActionsAll } from './actions';
import { AppState } from 'store';
import { TCryptoCurrencies, TFiatCurrencies } from 'types';
import { selectDefaultFiat } from 'core/settings/reducer';

type TState = {
  data: {
    [key in Partial<TFiatCurrencies>]: {
      [key in Partial<TCryptoCurrencies>]: {
        price: string;
        timestamp: string;
      }
    }
  };
  error?: any;
};

const initialState: TState = {
  data: { EUR: {}, USD: {}} as any,
};

function loadRateSuccess(state: TState, { cryptoCurrencyName, fiatCurrencyName, price, timestamp }) {
  const modifiedState = R.assocPath(['error'], '', state);
  if (timestamp === R.path(['data', fiatCurrencyName, cryptoCurrencyName, timestamp], modifiedState)) {
    return modifiedState;
  }
  return R.assocPath(['data', fiatCurrencyName, cryptoCurrencyName], { timestamp, price }, modifiedState);
}

export type TRatesState = TState;
export const ratesInitialState = initialState;
export const rates: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.LOAD_RATES_SUCCESS:
      return loadRateSuccess(state, action);
    case ActionTypes.LOAD_RATES_FAIL:
      return R.assocPath(['error'], action.error, state);
    default: return state;
  }
};

export const selectRates = (state: AppState) => {
  const fiat = selectDefaultFiat(state);
  return state.rates.data[fiat];
};
