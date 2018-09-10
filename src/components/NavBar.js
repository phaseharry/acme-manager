import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const { users } = props;
  const managerIds = [];
  users.forEach(function(user) {
    if (user.managerId && managerIds.indexOf(user.managerId) < 0) {
      managerIds.push(user.managerId);
    }
  });

  return (
    <div>
      <Link to="/users">
        <div>Users {users.length}</div>
      </Link>
      <Link to="/managers">
        <div>Managers {managerIds.length}</div>
      </Link>
      <Link to="/users/create">Create User</Link>
    </div>
  );
};

export default NavBar;
