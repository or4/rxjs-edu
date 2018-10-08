import { combineReducers } from 'redoodle';
import { AppState } from 'store';

import { TDefaultFiatState, defaultFiatInitialState, defaultFiat  } from './defaultFiat/reducer';
import { TSelectedCryptosState, selectedCryptosInitialState, selectedCryptos  } from './selectedCryptos/reducer';

export type TSettingsState = {
  defaultFiat: TDefaultFiatState;
  selectedCryptos: TSelectedCryptosState;
};

export const settingsInitialState: TSettingsState = {
  defaultFiat: defaultFiatInitialState,
  selectedCryptos: selectedCryptosInitialState,
};

export const settings =  combineReducers<TSettingsState>({
  defaultFiat,
  selectedCryptos,
});


export const selectDefaultFiat = (appState: AppState) => appState.settings.defaultFiat;
export const selectSelectedCryptos = (appState: AppState) => appState.settings.selectedCryptos;
