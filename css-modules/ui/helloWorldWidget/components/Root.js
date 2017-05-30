import { observe, streamProps } from 'frint-react';
import React from 'react';

import {
  bold,
  italic,
  boldAndItalic
} from '../styles/typography.css';
import {
  bordered,
  squaredBackground
} from './Root.css';

function Root({ appName, appId }) {
  return (
    <div className={`${bordered} ${squaredBackground}`}>
      <h2>App: {appName}</h2>

      <p className={bold}>
        Hello world!
      </p>

      <p>
        You have
        <span className={boldAndItalic}>successfully</span>
        pushed your App!
      </p>
    </div>
  );
}

export default observe(function doObserve(app) {
  return streamProps({})
    .set('appName', app.getOption('appName'))
    .set('appId', app.getOption('appId'))
    .get$();
})(Root);
