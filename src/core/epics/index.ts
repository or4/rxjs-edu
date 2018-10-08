import { combineEpics } from 'redux-observable';
import { loadRates } from './loadRates';
// import { logIn, logOut } from './session';

export default combineEpics(
  loadRates
  // saveText,
  // logIn,
  // logOut
);