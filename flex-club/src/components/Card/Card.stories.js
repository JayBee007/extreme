/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import withGlobal from 'utils/storyDecorator';

import Card from './Card';

storiesOf('Card', module)
  .addDecorator(withGlobal)
  .addDecorator(centered)
  .add('default', () => <Card />);
