import TodoList from './TodoList';
import { MemoryRouter } from 'react-router'
import React from 'react';
import { storiesOf } from '@storybook/react';

var stories = storiesOf('TodoList', module);

stories.add('TodoList', () => <MemoryRouter initialEntries={['/']}><TodoList /></MemoryRouter>)