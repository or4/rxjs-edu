import { Action } from 'redux';
import { TCryptoCurrencies, TFiatCurrencies } from 'types';

export enum ActionTypes {
  LOAD_RATES = '[Rates] Load rates',
  LOAD_RATES_SUCCESS = '[Rates] Load rates success',
  LOAD_RATES_FAIL = '[Rates] Load rates fail',
}

// Load Rates

export class LoadRates implements Action {
  public readonly type = ActionTypes.LOAD_RATES;
  constructor() { }
}

export class LoadRatesSuccess implements Action {
  public readonly type = ActionTypes.LOAD_RATES_SUCCESS;
  constructor(
    public cryptoCurrencyName: TCryptoCurrencies,
    public fiatCurrencyName: TFiatCurrencies,
    public price: string,
    public timestamp: string
  )
  { }
}
export class LoadRatesFail implements Action {
  public readonly type = ActionTypes.LOAD_RATES_FAIL;
  constructor(public error: any) { }
}

export type ActionsAll = LoadRates | LoadRatesSuccess | LoadRatesFail;
