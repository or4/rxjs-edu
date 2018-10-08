import React from 'react';

// RxJS v6+
import { timer } from 'rxjs';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit 0 after 1 second then complete, since no second argument is supplied
  const source = timer(1000);
  //output: 0
  const subscribe = source.subscribe(val => console.log(val));

};

const test2 = () => {
  /*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
  const source = timer(1000, 2000);
  //output: 0,1,2,3,4,5......
  const subscribe = source.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Timer extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>timer</h5>
      </div>
    );
  }
}

