import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Login from './Login';

var stories = storiesOf('Login', module);

stories.addDecorator(withKnobs);

stories.add('Login', () => (
    < Login>
    </Login >
));
