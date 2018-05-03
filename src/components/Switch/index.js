import React from 'react';
import propTypes from 'prop-types';

import './style.css';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenParamIndex: 0,
        };
    }
    handleClick(which) {
        this.setState({
            chosenParamIndex: which,
        }); 
    }

    getClass(index) {
        const activeParamClass = this.state.chosenParamIndex === index ? "switch__param--active" : "";
        return `switch__param ${activeParamClass}`;
    }

    render() {
        const { params, text } = this.props;
        return (
            <div className="switch">
                { text }
                <span className={ this.getClass(0) } onClick={ this.handleClick.bind(this, 0) }>
                    { params[0] }
                </span>
                <span className={ this.getClass(1) } onClick={ this.handleClick.bind(this, 1) }>
                    { params[1] }
                </span>   
            </div>
        );
    }
}

Switch.propTypes = {
    params: propTypes.array,
    text: propTypes.string
};

export default Switch;