// __tests__/Intro-test.js
import React from 'react';
import HomeScreen from '../src/containers/Home';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});