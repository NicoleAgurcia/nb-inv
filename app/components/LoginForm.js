import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const paperStyle = {
  width:"100%",
  padding: "5rem",
  height: "100%"
}

const loginStyle = {
  display: "block",
  margin: "2rem auto 0 auto",
  width: "25rem"
}

const inputStyle = {
  display: "block",
  margin: "0 auto 0 auto",
  width: "25rem",
}

const passwordStyle = {
  marginTop: "-1rem",
  marginBottom: "3rem"
}


export default class Login extends React.Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }
  render() {
  	const { logIn} = this.props;
    console.log(this.state);
    return (
      <div className="loginForm">
          <Paper style ={paperStyle} zDepth={3}>
            <TextField
              hintText="admin"
              floatingLabelText="Usuario"
              style = {inputStyle}
              onChange = { e => this.setState({username: e.target.value})}
            />
            
            <TextField
              hintText="**********"
              floatingLabelText="Contrasena"
              type = "password"
              style = {Object.assign({}, passwordStyle, inputStyle)}
              ref = {(node) => this.password = node}
              onChange = { e => this.setState({password: e.target.value})}
            />

            <RaisedButton label="Login" secondary="true" 
                          onClick={() => logIn(this.state.username)}
                          style = {loginStyle}
            />
          </Paper>
      </div>
    );
  }
}


// <input
//               ref={(node) => this.username = node}
//             />

            // <input
            //   ref={(node) => this.password = node}
            // />