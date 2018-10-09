import React from 'react';

// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value every two seconds
  const source = interval(2000);
  //map all emissions to one value
  const example = source.pipe(mapTo('HELLO WORLD!'));
  //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  //emit every click on document
  const source = fromEvent(document, 'click');
  //map all emissions to one value
  const example = source.pipe(mapTo('GOODBYE WORLD!'));
  //output: (click)'GOODBYE WORLD!'...
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class MapTo extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>mapTo</h5>
      </div>
    );
  }
}

