import React from 'react';
import api from '../api/Api.js';
import UserTable from './UserTable.js';
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  container: {
    margin: 32
  }
};

class AdminPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users:[]};
    this.refreshUserList.bind(this);
  }

  componentDidMount() {
    this.getUserList();
  };

  refreshUserList = () => {
    this.getUserList();
  };

  getUserList() {
    api.get('/admin/users').then(users => this.setState({users: users}));
  }

  render() {
    return(
      <div style={style.container}>
        <div>
        <h2 style={style.headline}>User List</h2>
        <UserTable users={this.state.users}/>
          <RaisedButton label='Refresh' onClick={this.refreshUserList}/>
        </div>
      </div>
    )
  };
}

export default AdminPageComponent;