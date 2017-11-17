import React from 'react';
import { observe } from 'frint-react';

import Root from './Root';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    // display fallback UI
    this.setState({
      hasError: true
    });

    // log the error
    this.props.logError(
      this.props.appName,
      'Error: Component',
      {
        error,
        info,
      }
    );
  }

  render() {
    if (this.state.hasError) {
      // you can render any custom fallback UI
      return null;
    }

    return <Root />;
  }
}

export default observe((app) => {
  const logger = app.get('logger');

  return {
    appName: app.getName(),
    logError: (...args) => logger.error(...args)
  };
})(Index);
