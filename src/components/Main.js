import React from 'react';
import { store, loadUsers, handleInput } from '../store';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import User from './Users';
import Managers from './Managers';
import UserCreateUpdate from './UserCreateUpdate';

class Main extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    axios.get('/api/users').then(data => {
      const users = data.data;
      axios.get('/api/managers').then(managers => {
        store.dispatch(loadUsers(users, managers.data));
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleChange(event) {
    store.dispatch(handleInput(event.target.value));
  }
  render() {
    const { users, managers } = this.state;
    return (
      <div>
        <NavBar users={users} />
        <Route
          exact
          path="/users"
          render={props => <User users={users} {...props} />}
        />
        <Route
          path="/users/create"
          render={props => (
            <UserCreateUpdate
              users={users}
              handleChange={this.handleChange}
              value={this.state.user}
            />
          )}
        />
        <Route
          path="/managers"
          render={props => <Managers managers={managers} />}
        />
      </div>
    );
  }
}

export default Main;
