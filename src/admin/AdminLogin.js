import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from "material-ui/Paper";
import api from "../api/Api.js";

const style = {
  margin: 24,
  padding: 24,
};

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "admin"
    };
    this.updateUserName.bind(this);
    this.updatePassword.bind(this);
    this.handleLogin.bind(this);
  };

  handleLogin = () => {
    if (!this.state.username.length || !this.state.password.length) {
      alert("Login Failed!")
    }
    api.post('/admin/login',
      {
        username: this.state.username,
        password: this.state.password
      })
      .then(resp => {
        api.setToken(resp.token);
        this.props.history.replace('/pfm/admin/manage');
      })
  };

  updateUserName = (evt, value) => {
    this.setState({username: value});
  };

  updatePassword = (evt, value) => {
    this.setState({password: value});
  };

  render() {
    return (
      <Paper style={style}>
        <h2>Admin Login</h2>
        <TextField
          id={"username"}
          floatingLabelText="Admin User"
          hintText="Admin User"
          value={this.state.username}
          onChange={this.updateUserName}
        /><br/>
        <TextField
          id={"password"}
          floatingLabelText="Password"
          type="password"
          hintText="Password"
          value={this.state.password}
          onChange={this.updatePassword}
        /><br/>
        <RaisedButton
          style={{marginTop: 16}}
          primary={true}
          label="Login"
          onClick={this.handleLogin}
        />
      </Paper>
    );
  }
}

export default AdminLogin;