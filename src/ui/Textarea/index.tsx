import React from 'react';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { joinWithSpace } from 'helpers';
import { theme, lightFont, borderFull } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
  },
  input: {
    border: '0',
    height: '38px',
    maxHeight: '44px',
    minHeight: '44px',
    outline: 'none',
    padding: '5px 8px',
    width: '100%',

    ...borderFull(),
    ...lightFont(theme.colors.greySecond, '16px', '32px')
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type State = {
};

type Props = {
  className?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
};

export class Textarea extends React.Component<Props, State> {
  onChange = (event: any) => {
    const text: string = R.path(['target', 'value'], event);
    RA.isNotNil(text) && this.props.onChange(text);
  }

  render() {
    const { className, placeholder, value } = this.props;

    return (
      <div className={classes.container}>
        <textarea
          className={joinWithSpace(classes.input, className)}
          onChange={this.onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}
