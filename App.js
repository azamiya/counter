import HomeScreen from './src/screens/Home';
import SampleScreen from './src/screens/Sample';
import CounterScreen from './src/screens/Counter';

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
