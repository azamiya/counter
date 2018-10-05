// __tests__/Intro-test.js
import React from 'react';
import HomeScreen from '../src/containers/Home';
import SampleScreen from '../src/containers/Sample';
import CounterScreen from '../src/containers/Counter';

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