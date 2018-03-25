import React from 'react';
import Paper from 'material-ui/Paper';
import api from '../api/Api.js';

const parseHash = (hash) => {
  if (hash.indexOf("#") === 0) {
    hash = hash.substr(1);
  }
  const params = {};
  hash.split('&').map(hk => {
    let chunk = hk.split('=');
    params[chunk[0]] = chunk[1]
  });
  return params
};

const style = {
  margin: 20,
  padding: 16
};

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user:null}
  }

  componentDidMount() {
    const params = parseHash(this.props.location.hash);
    api.get(`/login/facebook?access_token=${params['access_token']}`)
      .then(resp => {
        api.setToken(resp.token);
        this.props.history.push('/pfm/home')
      })
  }

  render() {
    console.log(this.state)
    return (
      <Paper style={style} zDepth={1}>
        {this.state.user ? (
            <h3>Hello {this.state.user.firstName}</h3>
          ) :
          (
            <h3>We are logging you in...</h3>
          )}

      </Paper>
    )
  }
}

export default LoginComponent;