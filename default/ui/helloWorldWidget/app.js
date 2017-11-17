import { createApp } from 'frint';

import Index from './components/Index';

export default createApp({
  name: 'widget-helloWorld',
  providers: [
    {
      name: 'component',
      useValue: Index
    }
  ]
});
