import * as React from 'react';

export namespace HelloWorld {
  export interface Props {
    
  }

  export interface State {
    /* empty */
  }
}

export class HelloWorld extends React.Component<HelloWorld.Props, HelloWorld.State> { 
 

  render() {
    return (     
        <h1>Hello world</h1>      
  
    );
  }
}


