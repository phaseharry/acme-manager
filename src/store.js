import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

//action types
const LOAD_USERS = 'LOAD_USERS';
const ADD_USER = 'ADD_USER';
const HANDLE_INPUT = 'HANDLE_INPUT';
//action fncs
const loadUsers = (users, managers) => ({ type: LOAD_USERS, users, managers });
const addUser = (user, manager) => ({ type: ADD_USER, user, manager });
const handleInput = (name, value) => ({ type: HANDLE_INPUT, name, value });

const initialState = {
  users: [],
  managers: [],
  user: '',
  manager: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.users, managers: action.managers };
    case HANDLE_INPUT:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

const store = createStore(reducer); //applyMiddleware(loggerMiddleware)

export { store, loadUsers, addUser, handleInput };
