import { createApp } from 'frint';

import Root from './components/Root';

export default createApp({
  name: 'widget-helloWorld',
  providers: [
    {
      name: 'component',
      useValue: Root
    }
  ]
});
