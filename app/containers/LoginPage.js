import React from 'react';
import * as LoginActions from '../actions/login';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter';
import LoginForm from '../components/LoginForm';


class LoginPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginPage">
        <div className="top" />
        <Link className="pa" to="/">
              <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <div className="content">
          <div className="form-wrapper">
            <LoginForm {...this.props} />
          </div>
        </div>
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