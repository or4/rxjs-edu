import { Action } from 'redux';
import { TFiatCurrencies } from 'types';

export enum ActionTypes {
  CHANGE_DEFAULT_FIAT = '[Settings/Default fiat] Change default fiat'
}
export class ChangeDefaultFiat implements Action {
  public readonly type = ActionTypes.CHANGE_DEFAULT_FIAT;
  constructor(public fiatName: TFiatCurrencies) { }
}
export type ActionsAll = ChangeDefaultFiat;
