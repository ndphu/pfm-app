import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeComponent from './home/HomeComponent.js';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom'
import LoginComponent from "./login/LoginComponent";
import AdminLogin from "./admin/AdminLogin";
import AdminPageComponent from "./admin/AdminPageComponent";
import UnauthorizedComponent from "./login/UnauthorizedComponent.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/pfm/unauthorized' component={UnauthorizedComponent}/>
            <Route exact path="/pfm/home" component={HomeComponent}/>
            <Route exact path="/pfm/login" component={LoginComponent}/>
            <Route exact path="/pfm/admin/login" component={AdminLogin}/>
            <Route exact path="/pfm/admin/manage" component={AdminPageComponent}/>
            <Redirect from='/' to='/pfm/home'/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
