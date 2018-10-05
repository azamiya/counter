import HomeScreen from './src/containers/Home';
import SampleScreen from './src/containers/Sample';
import CounterScreen from './src/containers/Counter';

import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Sample: {
    screen: SampleScreen
  },
  Counter: {
    screen: CounterScreen
  },
});
