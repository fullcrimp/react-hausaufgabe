import React from 'react';
import ReactDom from 'react-dom';


if (process.env.NODE_ENV === 'development') {
    console.log('YOU USE A DEVELOPMENT VERSION');
} else {
    console.log('YOU USE A PRODUCTION VERSION');
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
