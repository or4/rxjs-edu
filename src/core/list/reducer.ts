import { Reducer } from 'redux';
import * as R from 'ramda';
import { AppState } from 'store';
import { ActionTypes, ActionsAll } from './actions';

type TState = {
  error?: any;
  requesting?: boolean;
};

const initialState: TState = {
  requesting: false,
};

export type TListState = TState;
export const listInitialState = initialState;
export const list: Reducer<TState> = (state: TState = initialState, action: ActionsAll) => {
  switch (action.type) {
    case ActionTypes.SET_INITIAL_STATE:
      return initialState;

    default: return state;
  }
};

export const selectList = (state: AppState): TListState => state.list;
