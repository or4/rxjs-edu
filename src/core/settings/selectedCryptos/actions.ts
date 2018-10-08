import { Action } from 'redux';
import { TCryptoCurrencies } from 'types';

export enum ActionTypes {
  ADD_CRYPTO = '[Settings/Selected crypto] Add crypto',
  REMOVE_CRYPTO = '[Settings/Selected crypto] Remove crypto',
}
export class AddCrypto implements Action {
  public readonly type = ActionTypes.ADD_CRYPTO;
  constructor(public cryptoName: TCryptoCurrencies) { }
}
export class RemoveCrypto implements Action {
  public readonly type = ActionTypes.REMOVE_CRYPTO;
  constructor(public cryptoName: TCryptoCurrencies) { }
}
export type ActionsAll = AddCrypto | RemoveCrypto;
