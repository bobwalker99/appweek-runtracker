/**
 */
 'use strict';

const React = require('React');
const ReactTestRenderer = require('react-test-renderer');
const Text = require('Text');

import TimeInput from '../TimeInput.react';

describe('TimeInput', () => {
  it('renders correctly', () => {
    const instance = ReactTestRenderer.create(
      <TimeInput style={{}} />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
