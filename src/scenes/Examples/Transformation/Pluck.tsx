import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
  //grab names
  const example = source.pipe(pluck('name'));
  //output: "Joe", "Sarah"
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  const source = from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' }},
    //will return undefined when no job is found
    { name: 'Sarah', age: 35 }
  ]);
  //grab title property under job
  const example = source.pipe(pluck('job', 'title'));
  //output: "Developer" , undefined
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Pluck extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>pluck</h5>
      </div>
    );
  }
}

