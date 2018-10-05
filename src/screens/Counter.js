import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';
import CounterPanel from '../containers/counter';

const store = configureStore();

type Props = {};
export default class SampleScreen extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <CounterPanel />
      </Provider>
    );
  }
}