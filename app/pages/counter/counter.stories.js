// @flow
import React from 'react';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { configureStore } from "../../store/configureStore";
import { storiesOf } from '@storybook/react';
import type { counterStateType } from './Counter.reducers';
import Counter from "./Counter";
import CounterPage from "./Counter.page";

const store = configureStore();

storiesOf('Counter', module)
  .addDecorator(story => (
    <Provider store={store}><MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter></Provider>
  ))
  .add('main', () => (
    <CounterPage />
  ));