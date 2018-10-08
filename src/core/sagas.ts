import { all } from 'redux-saga/effects';
import rates from './rates/sagas';
// import auth from './auth/sagas';

export function* sagas() {
  yield all([
    // auth,
    ...rates
  ].reduce((allSagas, sagas) => allSagas.concat(sagas), []));
}
