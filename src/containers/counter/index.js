import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from '../../redux/modules/counter';

const CounterPanel = ({
  count,
  onIncrementButtonPressed,
  onDecrementButtonPressed,
  onResetButtonPressed
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello this is counter!</Text>
      <Text style={styles.welcome}>Count is : {count}</Text>
      <Button
        title="+"
        onPress={onIncrementButtonPressed}
      />
      <Button
        title="-"
        onPress={onDecrementButtonPressed}
      />
      <Button
        title="RESET"
        onPress={onResetButtonPressed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});

const mapStateToProps = state => {
  const { count } = state.counter;
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementButtonPressed:
      () => dispatch(incrementCounter()),
    onDecrementButtonPressed:
      () => dispatch(decrementCounter()),
    onResetButtonPressed:
      () => dispatch(resetCounter())
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(CounterPanel);