/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import HomePage from './home';
import CounterPage from './counter';
import TodoListPage from './todoList';

export default () => (
  <App>
    <Switch>
      <Route path="/todoList" component={TodoListPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
