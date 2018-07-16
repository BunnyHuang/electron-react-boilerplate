import React from 'react';
import { MemoryRouter } from 'react-router'
import Home from "./Home.js";
import HomePage from "./";
import { storiesOf } from '@storybook/react';

storiesOf('Home', module)
  .add('HomePage', () => (
    <MemoryRouter initialEntries={['/some/path']}>
        <HomePage />
    </MemoryRouter>));

storiesOf('Home', module)
  .add('Home Component', () => (
    <MemoryRouter initialEntries={['/']}>
        <Home />
    </MemoryRouter>));