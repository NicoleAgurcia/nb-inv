import React from 'react';

export default class Login extends React.Component {
    static propTypes = {
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
  	//const { logIn, logOut } = this.props;
    return (
      <div>Login Component</div>
    );
  }
}
