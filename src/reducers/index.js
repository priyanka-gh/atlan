// reducers/index.js
import { combineReducers } from 'redux';
import { queriesReducer } from './queries';

const rootReducer = combineReducers({
  queries: queriesReducer,
  // other reducers...
});

export default rootReducer;
