// @flow

import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import type { IntlShape } from 'react-intl';

type PropsT = {
  lala: number,
  intl: IntlShape // injected by react-intl
};

const messages = defineMessages({
  example: {
    id: 'exampleId',
    defaultMessage: 'Example'
  }
});

class BaseComponent extends Component<PropsT> {
  render() {
    const { intl } = this.props;
    return <div>{intl.formatMessage(messages.example)}</div>;
  }
}

export default injectIntl(BaseComponent);
