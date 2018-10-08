import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value in sequence every 1 second
  const source = interval(1000);
  //output: 0,1,2,3,4,5....
  const subscribe = source.subscribe(val => console.log(val));
};


export class Interval extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>interval - Emit numbers in sequence based on provided timeframe.</h5>
      </div>
    );
  }
}

