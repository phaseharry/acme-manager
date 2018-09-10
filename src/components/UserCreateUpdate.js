import React from 'react';
//import { store, handleInput } from '../store';

class UserCreateUpdate extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = store.getState();
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleChange(event) {
  //     store.dispatch(handleInput(event.target.value));
  //   }
  render() {
    const { users, handleChange, value } = this.props;
    return (
      <form>
        <label htmlFor="user">Name</label>
        <input name="user" value={value} onChange={handleChange} />
        <select name="manager">
          <option>None</option>
          {users.map(function(user) {
            return <option key={user.id}>{user.name}</option>;
          })}
        </select>
        <button type="submit">Create User</button>
      </form>
    );
  }
}

export default UserCreateUpdate;
