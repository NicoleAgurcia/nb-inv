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
      <div className="row"></div>
      <LoginForm
      {...this.props}
      />
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