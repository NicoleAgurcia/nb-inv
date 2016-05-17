import React from 'react';
import * as LoginActions from '../actions/login';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as CounterActions from '../actions/counter';

class LoginPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {logIn, logOut} = this.props;
    console.log(this.props);
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
              Log In
          </button>
          <button  onClick={logOut}>
              Log Out
          </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);