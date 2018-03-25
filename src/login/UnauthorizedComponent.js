import React from 'react';
import AppBar from "material-ui/AppBar";
import {RaisedButton} from "material-ui";
import config from '../config/Config.js';

const style = {
  body: {
    margin: 16,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 400,
  },
  button: {
    marginTop: 8,
  }
};

class UnauthorizedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdminLoginClick.bind(this);
    this.handleFacebookLoginClick.bind(this);
  }

  handleAdminLoginClick = () => {
    this.props.history.push('/pfm/admin/login')
  };

  handleFacebookLoginClick = () => {
    window.location.href =
      `https://www.facebook.com/v2.12/dialog/oauth?client_id=${config.facebookAppId}&redirect_uri=${config.loginRedirectUrl}&response_type=token`;
  };


  render() {
    return(
      <div>
        <AppBar
          title="Login Required"
        />
        <div style={style.body}>
          <h3 style={style.header}>You need to login to use this app</h3>
          <RaisedButton style={style.button}
                        primary={true}
                        label='Login With Facebook'
                        onClick={this.handleFacebookLoginClick}/>
          <br/>
          <RaisedButton style={style.button}
                        label='Admin Login'
                        onClick={this.handleAdminLoginClick}/>
        </div>
      </div>
    );
  }
}


export default UnauthorizedComponent;