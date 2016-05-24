import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const { logIn, logOut } = this.props;
    return (
      <div>
        <div>LoginPage</div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <input 
            ref={(node) => this.input = node}
          />
          <button  onClick={() => logIn(this.input.value)}>
              Test
          </button>
          <button  onClick={logOut}>
              Log Out
          </button>
      </div>
    );
  }
}
