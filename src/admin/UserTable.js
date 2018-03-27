import React from 'react';
import {Table, TableHeader, TableRow, TableBody, TableHeaderColumn, TableRowColumn} from "material-ui/Table";

class UserTable extends React.Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn tooltip="User ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="First Name">First Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="Last Name">Last Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="External Id">External Id</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          stripedRows={true}
          showRowHover={true}>
          {this.props.users.map((user) => (
            <TableRow key={'user-table-' + user.id}>
              <TableRowColumn>{user.id}</TableRowColumn>
              <TableRowColumn>{user.firstName}</TableRowColumn>
              <TableRowColumn>{user.lastName}</TableRowColumn>
              <TableRowColumn>{user.externalId}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default UserTable;