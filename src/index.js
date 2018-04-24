import React from 'react';
import ReactDom from 'react-dom';


if (NODE_ENV === 'development') {
  console.log('developemnt');
} else {
  console.log('not developemnt');
}

export default class CmpHelloWorldVer1 extends React.Component {
  render() {
    this.varName = 'val';
    return (<h1>React.Component</h1>);
  }
}


ReactDom.render(
  <CmpHelloWorldVer1 />,
  document.getElementById('cmpHelloWorldVerContainer'),
);
