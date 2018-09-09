import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

//action types

//action fncs
const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export { store };
