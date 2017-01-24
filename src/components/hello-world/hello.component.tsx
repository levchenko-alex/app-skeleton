import * as React from 'react';

import { HelloProps } from '../../interfaces/hello-world';


export class HelloWorld extends React.Component<HelloProps, {}> {
  render() {
    return <h1>{this.props.message}</h1>
  }
} 