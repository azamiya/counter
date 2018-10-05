/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import HomeScreen from './src/containers/Home';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
