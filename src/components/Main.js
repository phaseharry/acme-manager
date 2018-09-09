import React from 'react';
import { store } from '../store';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    axios.get('/api/users').then(users => {
      this.setState({ users: users.data });
    });
  }
  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div>
        {users.map(function(user) {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    );
  }
}

export default Main;
