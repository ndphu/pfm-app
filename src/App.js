import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeComponent from './home/HomeComponent.js';
import {Route, BrowserRouter} from 'react-router-dom'
import LoginComponent from "./login/LoginComponent";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import AdminLogin from "./admin/AdminLogin";
import Popover, {PopoverAnimationVertical} from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
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
          <div>
            <Route path='/pfm/unauthorized' component={UnauthorizedComponent}/>
            <Route exact path="/pfm/home" component={HomeComponent}/>
            <Route exact path="/pfm/login" component={LoginComponent}/>
            <Route exact path="/pfm/admin/login" component={AdminLogin}/>
            <Route exact path="/pfm/admin/manage" component={AdminPageComponent}/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
