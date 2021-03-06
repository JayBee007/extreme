/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';

import withGlobal from 'utils/storyDecorator';

import DropDown from './DropDown';

storiesOf('DropDown', module)
  .addDecorator(withGlobal)
  .addDecorator(centered)
  .add('default', () => <DropDown onChange={action('onChange')} />);
