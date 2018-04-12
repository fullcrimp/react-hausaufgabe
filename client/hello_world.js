/**
 * #React.Component
 */
class CmpHelloWorldVer1 extends React.Component {
  render() {
    return <h1>React.Component</h1>
  }
}


class CmpHelloWorldVer2 extends React.PureComponent {
  render() {
    return <h1>React.PureComponent</h1>
  }
}


/**
 * Functional component
 */
const CmpHelloWorldVer3 = () => {
  return (
    <h1>Functional component</h1>
  )
}

ReactDOM.render(<CmpHelloWorldVer1 />, document.getElementById('cmpHelloWorldVerContainer1'))
/* React.createElement */
ReactDOM.render(React.createElement(CmpHelloWorldVer1, null), document.getElementById('cmpHelloWorldVerContainer2'))

ReactDOM.render(<CmpHelloWorldVer2 />, document.getElementById('cmpHelloWorldVerContainer3'))

ReactDOM.render(<CmpHelloWorldVer3 />, document.getElementById('cmpHelloWorldVerContainer4'))
