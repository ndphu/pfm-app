import React from 'react';
import AppBar from "material-ui/AppBar";
import {PopoverAnimationVertical} from "material-ui/Popover/index";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Popover from 'material-ui/Popover';
import api from '../api/Api.js';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from "material-ui/IconButton";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };
    this.handleClick.bind(this);
    this.handleRequestClose.bind(this);
    this.signOut.bind(this);
  }

  componentDidMount() {
    api.get('/user/current').then(resp=>console.log(resp))
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      popoverOpen: false
    })
  };

  signOut = (event) => {
    event.preventDefault();
    api.signout();
  };

  render() {
    return (
      <div>
        <AppBar title={'Home'}
                iconElementRight={<IconButton onClick={this.handleClick}><MoreVertIcon/></IconButton>}>
        </AppBar>
        <Popover
          open={this.state.popoverOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Sign out" onClick={this.signOut}/>
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default HomeComponent;