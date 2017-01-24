import * as React from 'react';

import { HelloWorld } from './hello-world/hello.component';

export class App extends React.Component<{},{}> {
  render() {
    return (
      <HelloWorld message={ Math.random() }/>
    );
  }
}
