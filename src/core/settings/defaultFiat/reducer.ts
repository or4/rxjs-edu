import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { TFiatCurrencies } from 'types';

type TState = TFiatCurrencies;

const initialState: TState = 'USD';

export type TDefaultFiatState = TState;
export const defaultFiatInitialState = initialState;
export const defaultFiat: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.CHANGE_DEFAULT_FIAT:
      return action.fiatName;
    default:
      return state;
  }
};
