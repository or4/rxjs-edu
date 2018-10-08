import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { AppState } from 'core/reducer';
import { TCryptoCurrencies } from 'types';
import { selectRates } from 'core/rates/reducer';
import { LoadRates } from 'core/rates/actions';
import './Main.styl';

type OwnProps = {};
type StateProps = {
  rates: {
    [key in Partial<TCryptoCurrencies>]: {
      price: string;
      timestamp: string;
    }
  };
};
type DispatchProps = {
  loadRates: () => void;
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class MainComponent extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.loadRates();
  }


  render() {
    const { rates } = this.props;
    return (
      <div className={'page'}>
        <h3>Main</h3>
        {
          R.pipe(
            R.toPairs,
            R.map(item => (
              <div key={item[1].price} className={'main__item'}>
                <div>
                  {item[0]}:
                </div>
                <div>
                  {item[1].price}
                </div>
              </div>
            ))
          )(rates)
        }
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  rates: selectRates(state),
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
  loadRates: () => {
    dispatch(new LoadRates());
  },
});

export const Main = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainComponent);
