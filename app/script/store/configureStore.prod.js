// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../home/Home.reducers';
import type { counterStateType } from '../counter/Counter.reducers';

export const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

export function configureStore(initialState?: counterStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

// export default { configureStore, history };
