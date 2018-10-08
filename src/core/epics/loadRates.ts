import { Observable, of, from, empty } from 'rxjs';
import { filter, switchMap, mergeMap, map, withLatestFrom, pluck, catchError, takeUntil, tap } from 'rxjs/operators';
import { ActionTypes, LoadRatesSuccess } from '../rates/actions';
import { AppState } from 'store';
import { StateObservable } from 'redux-observable';
import { Action } from 'redux';
import api from 'core/services/api';
import { getUrlForRate } from 'core/rates/helpers';



export const loadRates = (action$: Observable<Action>, store$: StateObservable<AppState>): Observable<Action> => {
  return action$.pipe(
    filter(action => {
      // console.log('action', action);
      return action.type === ActionTypes.LOAD_RATES; }),
    switchMap(() => api.get(getUrlForRate('BTC', 'USD'))),
    pluck('data'),
    pluck('data'),
    tap((res) => console.log('tap', res)),
    mergeMap(({ quotes, last_updated: timestamp }) => of(new LoadRatesSuccess('BTC', 'USD', quotes['USD'].price, timestamp)))
    // map(({ quotes, last_updated: timestamp }) => ({
    //   type: ActionTypes.LOAD_RATES_SUCCESS,
    //   cryptoCurrencyName: 'BTC',
    //   fiatCurrencyName: 'USD',
    //   price: quotes['USD'].price,
    //   timestamp,
    // }))
    // debounceTime(2000),
    // distinctUntilChanged()
  );
  // .subscribe(() => {
  //   // const = data.data;
  //   // console.log('epic loadRates', data);
  //   // console.log('epic loadRates', quotes, timestamp);
  //   console.log('done');

  // });
  // return of();
};


// export const logIn = (action$: Observable<Action>, store$: StateObservable<AppState>): Observable<Action> => {
//   return action$.pipe(
//     filter(action => action.type === ActionTypes.LOAD_RATES),
//     withLatestFrom(store$),
//     pluck('1', 'form'),
//     switchMap(({ username, password }) => requestLogIn(username, password).pipe(
//       switchMap(({ token, name, photo }) => of(
//         ActionCreators.changeSession('name', name),
//         ActionCreators.changeSession('token', token),
//         ActionCreators.changeSession('photo', photo)
//       )),
//       takeUntil(action$.pipe(
//         filter(action => action.type === Actions.LOG_OUT),
//       )),
//       catchError(() => empty())
//     )),
//   );
// };



// export const saveText = (action$: Observable<Action>, store$: StateObservable<AppState>): Observable<Action> => {
//   store$.pipe(
//     pluck('textToSave'),
//     debounceTime(2000),
//     distinctUntilChanged()
//   ).subscribe((data: string) => {
//     console.log('saved', data);
//   });
//   return of();
// };