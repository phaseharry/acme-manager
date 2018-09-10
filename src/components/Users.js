import React from 'react';

const Users = props => {
  const { users } = props;
  return (
    <div>
      {users.map(function(user) {
        if (user.manager) {
          return (
            <li key={user.id}>
              {user.name} managed by {user.manager.name}
            </li>
          );
        } else {
          return <li key={user.id}>{user.name}</li>;
        }
      })}
    </div>
  );
};

export default Users;
