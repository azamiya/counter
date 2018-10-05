// __tests__/Intro-test.js
import React from 'react';
import HomeScreen from '../src/screens/Home';
import SampleScreen from '../src/screens/Sample';
import CounterScreen from '../src/screens/Counter';

import renderer from 'react-test-renderer';

test('render home screen correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render sample screen correctly', () => {
  const tree = renderer.create(<SampleScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render counter screen correctly', () => {
  const tree = renderer.create(<CounterScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});