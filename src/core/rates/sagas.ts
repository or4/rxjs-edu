import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { TCryptoCurrencies, TFiatCurrencies, cryptoCurrencies, fiatCurrencies } from 'types';
import api from '../services/api';
import { LoadRatesSuccess, ActionTypes } from './actions';
import { getUrlForRate } from './helpers';


function* loadRates(cryptoCurrencyName: TCryptoCurrencies, fiatCurrencyName: TFiatCurrencies) {
  try {
    const result = yield call([null, api.get], getUrlForRate(cryptoCurrencyName, fiatCurrencyName));
    const { quotes, last_updated: timestamp } = result.data.data;
    const { price } = quotes[fiatCurrencyName];
    yield put(new LoadRatesSuccess(cryptoCurrencyName, fiatCurrencyName, price, timestamp));
  } catch (e) {
    yield put(new LoadRatesSuccess(cryptoCurrencyName, fiatCurrencyName, '-1', new Date().valueOf().toString()));
  }
}
function* startLoadingRatesOnce() {
  const delayMs = 500;
  for (const cryptoCurrency of cryptoCurrencies) {
    for (const fiatCurrency of fiatCurrencies) {
      yield fork(loadRates, cryptoCurrency, fiatCurrency);
      yield delay(delayMs);
    }
  }
}

let isAlreadyStartedProcess = false;

function* startLoadingRates() {
  if (isAlreadyStartedProcess) {
    yield fork(startLoadingRatesOnce);
  } else {
    isAlreadyStartedProcess = true;
    const delayLognMs = 5 * 60000;
    while (true) {
      yield fork(startLoadingRatesOnce);
      yield delay(delayLognMs);
    }
  }
}

function* loadRatesSuccess() {
  try {
    console.log('SAGA loadRatesSuccess');
    yield null;
  } catch (e) {
    console.log('SAGA loadRatesSuccess e');
  }
}

export default [
  // takeLatest(ActionTypes.LOAD_RATES + 1, startLoadingRates),
  takeLatest(ActionTypes.LOAD_RATES_SUCCESS, loadRatesSuccess),
];
