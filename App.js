/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
*/

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'


const RootStack = createStackNavigator({
    LoginScreen: {
      screen: LoginScreen
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    }
});

const App = createAppContainer(RootStack);

export default App;

