/**
* Password.jsx
* Created by Kyle Fox 12/4/15
**/

import React, { PropTypes } from 'react';

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    fieldID: PropTypes.string,
    iconClass: PropTypes.string,
    error: PropTypes.bool
}

const defaultProps = {
    fieldID: "password",
    iconClass: 'usa-da-icon',
    error: false
}

export default class Password extends React.Component {
    render() {
        let className = '';
        if (this.props.error) {
            className = ' error';
        }
        return (
            <div className="usa-da-input-container usa-da-input-password">
                <label className="sr-only" htmlFor="password">Password</label>
                <input
                    className={"usa-da-input-with-icon" + className}
                    id={this.props.fieldID}
                    name={this.props.fieldID}
                    type="password"
                    placeholder="Password"
                    aria-describedby="password"
                    onChange={this.props.handleChange}
                />
                <div className={this.props.iconClass + " usa-da-icon-lock usa-da-icon-nobg"}></div>
            </div>
        );
    }
}

Password.propTypes = propTypes;
Password.defaultProps = defaultProps;
