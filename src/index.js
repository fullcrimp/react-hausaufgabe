// import React from 'react';
import ReactDom from 'react-dom';


if (NODE_ENV === 'DEVELOPMENT') {
  console.log('developemnt');
} else {
  console.log('not developemnt');
}

export default function CmpHelloWorldVer() {
  return (
    <h1>Functional component</h1>
  );
}

ReactDom.render(
  <CmpHelloWorldVer />,
  document.getElementById('cmpHelloWorldVerContainer'),
);
