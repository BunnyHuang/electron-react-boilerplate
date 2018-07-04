// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from '../counter/Counter.reducers';

const rootReducer = combineReducers({
  counter,
  router
});

export default rootReducer;
