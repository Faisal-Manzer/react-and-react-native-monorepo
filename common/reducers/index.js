import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { demo } from './demo';

const reducers = combineReducers({
  demo,
});

export const store = createStore(reducers, applyMiddleware(thunk));
