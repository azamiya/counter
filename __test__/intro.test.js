// __tests__/Intro-test.js
import React from 'react';
import HomeScreen from '../src/containers/Home';
import SampleScreen from '../src/containers/Sample';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render sample screen correctly', () => {
  const tree = renderer.create(<SampleScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});