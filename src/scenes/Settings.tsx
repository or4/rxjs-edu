import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fromEvent } from 'rxjs';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

import { AppState } from 'core/reducer';
import { fiatCurrencies, TFiatCurrencies, cryptoCurrencies, TCryptoCurrencies } from 'types';
import { selectDefaultFiat, selectSelectedCryptos } from 'core/settings/reducer';
import { ChangeDefaultFiat } from 'core/settings/defaultFiat/actions';
import { AddCrypto, RemoveCrypto } from 'core/settings/selectedCryptos/actions';
import './Settings.styl';

type OwnProps = {
};
type StateProps = {
  defaultFiat: TFiatCurrencies;
  selectedCryptos: TCryptoCurrencies[];
};
type DispatchProps = {
  changeDefaultFiat: (fiat: TFiatCurrencies) => void;
  addCrypto: (crypto: TCryptoCurrencies) => void;
  removeCrypto: (crypto: TCryptoCurrencies) => void;
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

const getFiats = (activeFiat: string) => {
  const output = [];
  for (const fiat of fiatCurrencies) {
    const className = fiat === activeFiat ? 'active' : '';
    output.push(<a key={fiat} className={className}>{fiat}</a>);
  }
  return output;
};

const getCrypto = (activeCryptos: string[]) => {
  const output = [];
  for (const crypto of cryptoCurrencies) {
    const className = R.contains(crypto, activeCryptos) ? 'active' : '';
    output.push(<a key={crypto} className={className}>{crypto}</a>);
  }
  return output;
};


class SettingsComponent extends React.PureComponent<Props, State> {
  componentDidMount() {
    // THIS ONLY FOR EDUCATIONAL PURPOSE
    // IT IS VERY COMPLEX AND REDUNDANT SOLUTION
    const fiatBlock = document.getElementById('fiat-block');
    fiatBlock && fromEvent(fiatBlock, 'click').subscribe(event => {
      const fiat = R.path(['target', 'text'], event) as TFiatCurrencies;
      RA.isNotNil(fiat) && this.props.changeDefaultFiat(fiat);
    });

    // THIS ONLY FOR EDUCATIONAL PURPOSE
    // IT IS VERY COMPLEX AND REDUNDANT SOLUTION
    const cryptosBlock = document.getElementById('cryptos-block');
    cryptosBlock && fromEvent(cryptosBlock, 'click').subscribe(event => {
      const crypto = R.path(['target', 'text'], event) as TCryptoCurrencies;
      RA.isNotNil(crypto) && this.changeCrypto(crypto);
    });
  }

  changeCrypto = (crypto: TCryptoCurrencies) => {
    const { addCrypto, removeCrypto, selectedCryptos } = this.props;
    if (R.contains(crypto, selectedCryptos)) {
      removeCrypto(crypto);
    } else {
      addCrypto(crypto);
    }
  }

  render() {
    const { defaultFiat, selectedCryptos } = this.props;
    return (
      <div className={'page settings'}>
        <h3>Settings</h3>

        <div id={'fiat-block'} className={'settings-block'}>
          <h5>Change default fiat</h5>
          <div>
            {getFiats(defaultFiat)}
          </div>
        </div>

        <div id={'cryptos-block'} className={'settings-block'}>
          <h5>Change selected crypto currencies</h5>
          <div>
            {getCrypto(selectedCryptos)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  defaultFiat: selectDefaultFiat(state),
  selectedCryptos: selectSelectedCryptos(state),
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
  changeDefaultFiat: (fiat: TFiatCurrencies) => {
    dispatch(new ChangeDefaultFiat(fiat));
  },
  addCrypto: (crypto: TCryptoCurrencies) => {
    dispatch(new AddCrypto(crypto));
  },
  removeCrypto: (crypto: TCryptoCurrencies) => {
    dispatch(new RemoveCrypto(crypto));
  },
});

export const Settings = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(SettingsComponent);
